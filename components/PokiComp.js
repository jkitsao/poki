import React from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import Image from "next/image";
function PokiComp({ pokimon, setPokimon, setPokiPreview, onClose }) {
  const toast = useToast();
  const router = useRouter();
  const setPoki = (data) => {
    setPokimon(data);
    setPokiPreview(data);
    toast({
      title: `${data?.name} selected`,
      description: "..............",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    onClose();
  };
  return (
    <div>
      <div className="p-3 flex flex-wrap">
        {pokimon.map((poki, index) => (
          <div
            key={index}
            className="m-1 cursor-pointer hover:shadow-xl hover:text-yellow-700 transition-all duration-150"
            onClick={() => setPoki(poki)}
          >
            {/* <img
              src={poki.image}
              className="w-16 object-cover rounded shadow-md"
              title={poki.name}
            /> */}
            <Image src={poki.image} alt={poki?.name} width="50" height="50" />
            <div>
              <span className="text-xs p-2">{poki.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokiComp;
