import React from "react";
import Head from "next/head";

function Poki({ data }) {
  const Background = data?.poki?.image;
  const bg =
    "http://www.i2softbd.com/template/TPL-007/images/404-Page-Not-Found.png";

  return (
    <>
      <Head>
        <title>{data?.poki?.name}</title>
        <meta name="title" content="Create pokemon messages and share" />
        <meta name="description" content={data?.message} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="poki-mu.vercel.app" />
        <meta property="og:title" content={data?.message} />
        <meta property="og:description" content={data?.message} />
        <meta property="og:image" content={Background} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="poki-mu.vercel.app" />
        <meta property="twitter:title" content={data?.message} />
        <meta property="twitter:description" content={data?.message} />
        <meta property="twitter:image" content={Background} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <div
        className=" min-h-screen pb-8 grad pt-5 lg:pt-16"
        style={{ width: "100vw" }}
      >
        {/* {data} */}
        {data && data?.poki && (
          <div className="text-sm p-2 text-center text-gray-600 cursor-pointer bg-gray-100 rounded m-3 max-w-sm overflow-x-auto   fixed bottom-0  flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mx-1 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            {data && data?.poki && (
              <span className="hover:text-blue-600">
                {typeof window !== "undefined" && window.location.href}
              </span>
            )}
          </div>
        )}

        <main id="app" className="mb-8">
          <section className="cards">
            {/* <div class="card charizard"></div> */}
            <div
              className="card pika"
              //  background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png);
              style={{
                backgroundImage: `url(${Background ? Background : bg})`,
              }}
            >
              {/* <div className="h-24 bg-green-400 relative bottom-0 "></div> */}
            </div>
            {/* <div class="card mew"></div> */}
          </section>

          {data && data.poki && (
            <section className="p-5 flex justify-center">
              {/* <h1 className="text-2xl font-semibold text-center text-white">
            Pokemon Card, Holo Effect
          </h1> */}
              <article className="alert error">
                <div className="alert__wrapper">
                  <div className="alert__header">
                    <h3>
                      <span>
                        <i className="fa fa-exclamation-circle"></i>
                      </span>
                      <span>{data?.poki?.name} says </span>
                    </h3>
                  </div>
                  <div className="alert__body overflow-y-scroll max-h-64 whitespace-pre-wrap">
                    <p>{data?.message}</p>
                  </div>
                </div>
              </article>
            </section>
          )}

          <style className="hover"></style>
        </main>
      </div>
    </>
  );
}

export default Poki;
