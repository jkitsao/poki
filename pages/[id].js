import React from "react";
import Poki from "../components/Poki";
function page({ data }) {
  //   return <div>{JSON.stringify(data)}</div>;
  return <Poki data={data} />;
}

export default page;
export async function getServerSideProps({ query }) {
  try {
    const { id } = query;
    const res = await fetch(`http://localhost:3000/api/${id}`);
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (err) {
    console.error(err);
  }
}
