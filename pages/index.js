import Head from "next/head";
import Image from "next/image";
import { nanoid } from "nanoid";
import axios from "axios";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
// import styles from "../styles/Home.module.css";
import Box from "../components/Box";
import AuthIcons from "../components/AuthIcons";
import { useState } from "react";
export default function Home({ pokemon }) {
  const toast = useToast();
  const [pokimon, setPokimon] = useState({});
  const [pokiPreview, setPokiPreview] = useState({});
  const [message, setMessage] = useState("");
  const [pokiLink, setPokiLink] = useState(null);
  const router = useRouter();
  //function to handle form submission
  const handleSubmit = (e) => {
    if (!pokimon || !message) return;
    e.preventDefault();
    const data = {
      poki: pokimon,
      pokiId: nanoid(10),
      message,
    };
    axios
      .post("/api/poki", data)
      .then(function (res) {
        // console.log(response);
        // const link = `localhost:3000/${res.data.poki_id}`;
        // setPokiLink(link);
        return router.push(`/${res.data.poki_id}`);
      })
      .catch((err) => {
        throw err;
        // console.log(err)
        // return toast({
        //   title: `${"error"} `,
        //   status: err.message,
        //   isClosable: true,
        //   position: "top",
        // });
      });
  };

  return (
    <div className="text-xl">
      <Box
        pokemon={pokemon}
        setPokimon={setPokimon}
        setPokiPreview={setPokiPreview}
        pokiPreview={pokiPreview}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
      />
      {/* {JSON.stringify(pokimon)} */}
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await res.json();
    const pokemon = results.map((pokeman, index) => {
      const paddedId = ("00" + (index + 1)).slice(-3);

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
      return { ...pokeman, image };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
