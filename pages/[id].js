import React from "react";
import Poki from "../components/Poki";
function page({ data }) {
  //   return <div>{JSON.stringify(data)}</div>;
  if (data) return <Poki data={data} />;
  return (
    <div className="min-h-screen bg-black" style={{ width: "100vw" }}></div>
  );
}

export default page;
export async function getServerSideProps({ query }) {
  try {
    const { id } = query;
    const res = await fetch(`https://poki-mu.vercel.app/api/${id}`);
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (err) {
    console.error(err);
  }
}
