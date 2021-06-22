const mongoose = require("mongoose");
const connection_prod =
  "mongodb+srv://tipjarr:jacksonkitsaofujo@tipjarr-production.ysusw.mongodb.net/tipjarr?retryWrites=true&w=majority";
const connection_dev = "mongodb://localhost:27017/pokidb";
const connection_string =
  process.env.NODE_ENV === "production" ? connection_prod : connection_dev;
mongoose.connect(
  "mongodb+srv://tipjarr:jacksonkitsaofujo@tipjarr-production.ysusw.mongodb.net/tipjarr?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const pokiSchema = {
  poki_id: String,
  poki: Object,
  message: String,
};

let Poki;

try {
  // Trying to get the existing model to avoid OverwriteModelError
  Poki = mongoose.model("Poki");
} catch {
  Poki = mongoose.model("Poki", pokiSchema);
}

export default async (req, res) => {
  if (req.method === "GET") {
    const { pid } = req.query;

    Poki.findOne({ poki_id: pid }, (err, poki) => {
      if (err) {
        // console.log(err);
        res.json({ msg: "something went wrong" });
      } else {
        if (!poki)
          return res
            .status(404)
            .json({ message: "poki not available", poki: null });
        console.log(poki);
        res.status(200).json(poki);
      }
    });
    // console.log(req.query.pid);
  } else {
    if (req.method === "POST") {
      const doc = new Poki({
        poki_id: req.body.pokiId,
        poki: req.body.poki,
        message: req.body.message,
      });

      await doc.save();
      return res.status(200).json(doc);
    }
    return res.status(400).json({ message: "bad request" });
    // console.log(req.body);
  }
};
