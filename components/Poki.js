import React from "react";

function Poki({ data }) {
  const Background = data?.poki?.image;
  const bg =
    "http://www.i2softbd.com/template/TPL-007/images/404-Page-Not-Found.png";

  return (
    <div
      className=" min-h-screen pb-8 grad pt-10 lg:pt-16"
      style={{ width: "100vw" }}
    >
      {/* {data} */}
      <main id="app">
        <section class="cards">
          {/* <div class="card charizard"></div> */}
          <div
            class="card pika"
            //  background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png);
            style={{ backgroundImage: `url(${Background ? Background : bg})` }}
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
            <article class="alert error">
              <div class="alert__wrapper">
                <div class="alert__header">
                  <h3>
                    <span>
                      <i class="fa fa-exclamation-circle"></i>
                    </span>
                    <span>{data?.poki?.name} says </span>
                  </h3>
                </div>
                <div class="alert__body overflow-y-scroll max-h-64 whitespace-pre-wrap">
                  <p>{data?.message}</p>
                </div>
              </div>
            </article>
          </section>
        )}

        <style class="hover"></style>
      </main>
    </div>
  );
}

export default Poki;