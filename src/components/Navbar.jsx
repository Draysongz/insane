import {
  Flex,
  Image,
  Box,
  Text,
  Button,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSecondModalOpen,
    onOpen: onSecondModalOpen,
    onClose: onSecondModalClose,
  } = useDisclosure();
  return (
    <Flex backgroundColor={"#893a1b"} w={"85vw"} borderRadius={"10px"}>
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        color={"white"}
        display={useBreakpointValue({ base: "none", md: "none", lg: "flex" })}
      >
        <Image src={logo} alt="insane logo" w={"17%"} />
        <a href="#home">
          <Text>Home</Text>
        </a>
        <a href="#about">
          <Text cursor={"pointer"}>About</Text>
        </a>
        <a href="#memnomics">
          <Text>Tokenomics</Text>
        </a>
        <Button
          w={"15vw"}
          color={"white"}
          bgColor={"#00A550"}
          borderRadius={"20px"}
        >
          Buy $INSANE
        </Button>
      </Flex>

      <Flex
        backgroundColor={"#893a1b"}
        w={"85vw"}
        borderRadius={"10px"}
        display={useBreakpointValue({ base: "flex", md: "flex", lg: "none" })}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={2}
      >
        <Image src={logo} alt="insane logo" w={"40%"} />

        <Icon as={HamburgerIcon} boxSize={6} color={"white"} onClick={onOpen} />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              color={"#FFA81D "}
              direction={"column"}
              h={"60vh"}
              display={useBreakpointValue({
                base: "flex",
                md: "flex",
                lg: "none",
              })}
            >
              <Image src={logo} alt="insane logo" w={"100%"} />
              <a href="#home" onClick={() => onClose}>
                <Text>Home</Text>
              </a>
              <a href="#about" onClick={() => onClose()}>
                <Text cursor={"pointer"}>About</Text>
              </a>
              <a href="#memnomics" onClick={() => onClose()}>
                <Text>Tokenomics</Text>
              </a>
              <Button
                w={"35vw"}
                color={"white"}
                bgColor={"#00A550"}
                borderRadius={"20px"}
              >
                Buy $INSANE
              </Button>
              <Button
                w={"35vw"}
                onClick={() => {
                  onClose();
                  onSecondModalOpen();
                }}
                color={"white"}
                bgColor={"#00A550"}
                borderRadius={"20px"}
              >
                READ ME!!!
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Modal isOpen={isSecondModalOpen} onClose={onSecondModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Text>Why go </Text>
              <Image src={logo} alt="insane logo" w={"60%"} />
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} justifyContent={"space-between"} h={'60vh'}>
              <Text>
                {" "}
                ✅️ {" "}Because we believe that transparency & fair share is a vital
                tool in enabling us achieve the GREAT LEGACY we're working
                towards.{" "}
              </Text>

              <Text>
                ✅️{" "}In this case, dev doesn't have any extra token allocation
                pushed to several wallets, neither is dev wallet hidden. If dev
                sells it is open to all without doing much onchain analysis; Dev
                is NOT! Selling, rather committed to building.
              </Text>

              <Text>
                ✅️{" "}We don't want to do any form of backdoor trading or minting
                of extra supplies & dumping on our lovely community. Our total
                supply is capped at 1,000,000,000 $INSANE Tokens.
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Navbar;
