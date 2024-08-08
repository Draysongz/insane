import React from "react";
import Navbar from "./Navbar";
import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import hero from "../Assets/hero.png";
import character from "../Assets/heroChar.png";
import { CopyIcon } from "@chakra-ui/icons";

const Hero = () => {
  return (
    <Flex
      direction={"column"}
      minH={"50vh"}
      backgroundImage={hero}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      overflow={"hidden"}
    >
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        p={8}
      >
        <Navbar />
      </Flex>

      <Flex
        justifyContent={"space-between"}
        p={useBreakpointValue({
          base: "1%",
          md: "1%",
          lg: "4%",
        })}
        alignItems={"center"}
        overflow={"hidden"}
        h={useBreakpointValue({
          base: "40vh",
          md: "40vh",
          lg: "60vh",
        })}
        direction={useBreakpointValue({
          base: "column",
          md: "column",
          lg: "row",
        })}
      >
        <Flex
          direction={"column"}
          w={useBreakpointValue({
            base: "75%",
            md: "75%",
            lg: "70%",
          })}
          px={useBreakpointValue({
            base: "1%",
            md: "1%",
            lg: "12%",
          })}
          gap={5}
        >
          <Heading
          
            fontSize={useBreakpointValue({
              base: "20px",
              md: "20px",
              lg: "40px",
            })}
            w={useBreakpointValue({
              base: "75vw",
              md: "75vw",
              lg: "40vw",
            })}
            color="white"
            data-aos="zoom-in"
            
          >
            Normal is boring, $INSANE is Brave & BETTER!...
          </Heading>
          <Flex gap={6}>
            <Button
              color={"white"}
              bgColor={"#00A550"}
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              _hover={{
                bg: "transparent",
                border: "2px solid #00A550 ",
              }}
            >
              Buy $Insane
            </Button>
          </Flex>
          <InputGroup
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
          >
            <InputLeftElement cursor={"pointer"}>
              <CopyIcon color="gray.300" />
            </InputLeftElement>
            <Input
              backgroundColor={"white"}
              type="text"
              value="0x566hdhdjhdsjs......"
              w={useBreakpointValue({
                base: "100%",
                md: "100%",
                lg: "25vw",
              })}
              isDisabled
              _disabled={{
                background: "white",
              }}
            />
          </InputGroup>
        </Flex>

        <Flex direction={"column"} w={"30%"} py={2}>
          <Image
            display={useBreakpointValue({
              base: "none",
              md: "none",
              lg: "block",
            })}
            py={2}
            src={character}
            alt="insane character"
            width={{ base: "200px", md: "200px", lg: "600px" }} // Adjust the width for different screen sizes
            height={{ base: "150px", md: "300px", lg: "500px" }} // Adjust the size as needed
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
