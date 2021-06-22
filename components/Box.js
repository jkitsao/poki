import React from "react";
import AuthIcons from "../components/AuthIcons";
import Pokimodal from "./Pokimodal";
function Box({
  pokemon,
  setPokimon,
  setPokiPreview,
  pokiPreview,
  setMessage,
  handleSubmit,
}) {
  const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png";
  return (
    <div>
      {/* <!-- component --> */}
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen min-w-screen flex items-center justify-center  bg-yellow-200">
          <div className="flex flex-col shadow-xl bg-white overflow-hidden rounded-2xl mx-2">
            {/* <div className="text-center">
            <AuthIcons />
          </div> */}
            <div className=" bg-yellow-200 rounded-tl-2xl rounded-tr-2xl text-center">
              <img
                src={
                  pokiPreview && pokiPreview?.image ? pokiPreview?.image : url
                }
                className=" max-h-72 object-cover"
                style={{ minWidth: "30rem" }}
              />

              {pokiPreview?.name && (
                <div class="-mt-12">
                  <div class="inline-flex items-center bg-black leading-none text-yellow-400 rounded-full p-2 shadow text-sm">
                    <span class="inline-flex px-2 font-semibold">
                      {pokiPreview?.name && pokiPreview?.name}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <section className="p-3 ">
              <Pokimodal
                pokemon={pokemon}
                setPokimon={setPokimon}
                setPokiPreview={setPokiPreview}
              />
            </section>
            <div className="flex flex-col py-6 px-5 space-y-5 text-sm bg-white">
              {/* <span className="font-semibold text-gray-400 text-sm">Email</span>

            <input
              type="text"
              placeholder="Enter the email address to send to"
              className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent"
            /> */}

              <span className="font-semibold text-gray-400 text-sm">
                Message
              </span>
              <div className="">
                <textarea
                  className="description bg-gray-100 w-full sec p-3 h-32 border border-gray-300 text-sm outline-none"
                  spellcheck="false"
                  placeholder="Describe everything about this post here"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div>
                <button
                  className="w-full py-3 bg-pink-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-lg"
                  type="submit"
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Box;
