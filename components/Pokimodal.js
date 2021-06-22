import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import PokiComp from "./PokiComp";
function Pokimodal({ pokemon, setPokimon, setPokiPreview }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Choose pokemon</Button> */}
      <button
        class="bg-purple-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-purple-100 rounded-full hover:shadow-lg hover:bg-purple-600"
        onClick={onOpen}
        type="button"
      >
        choose pokemon
      </button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pick a character</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="py-4">
              <PokiComp
                pokimon={pokemon}
                setPokimon={setPokimon}
                setPokiPreview={setPokiPreview}
                onClose={onClose}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Pokimodal;
