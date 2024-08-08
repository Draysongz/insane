import React from 'react'
import about from '../Assets/about.png'
import { Flex, Image, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import rocket from '../Assets/rocket.png'

const About = () => {
  return (
     <Flex
      direction={"column"}
      h={useBreakpointValue({
        base: "100vh",
        md: "100vh",
        lg: "70vh"
      })}
      backgroundImage={about}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >

        <Flex w ={'100%'} justifyContent={"space-between"} p={10} alignItems={'center'}
        direction={useBreakpointValue({
            base: "column",
            md: "column",
            lg: "row"
        })}>

        <Flex w={ useBreakpointValue({
                base: "100%",
                md: "100%",
                lg: '50%'
            })} py={'1%'} direction={'column'}>
            <Image src={rocket}  alt='rocket' w={'85%'} />
        </Flex>

        <Flex color={'#FFA81D '} w={
            useBreakpointValue({
                base: "100%",
                md: "100%",
                lg: '50%'
            })
        } direction={'column'}
        justify={useBreakpointValue({
            base: "center",
            md: "center",
            lg: "start"
        })}

         alignItems={useBreakpointValue({
            base: "center",
            md: "center",
            lg: "start"
        })}
        >
            <Heading textDecoration={'underline'}> About Project</Heading>

            <Flex direction={'column'} justifyContent={'center'} gap={5} >
                <Text fontSize={'x-large'}>$INSANE Is beyond "just a meme token", it is a UTILITYMEME!</Text>

                <Text fontSize={'large'} wordBreak={"keep-all"}>$INSANE is more than just a meme token; it is a Utility Meme aimed at revolutionizing the Solana ecosystem. We are dedicated to building one of the greatest crypto/web3 communities, enriched with significant value. Our team, including developers, is an integral part of this vibrant and committed community, working together to create a lasting legacy and change the perception of Solana memes. By fostering a brave and better narrative, we aim to stand out and succeed where others have not. Join us in reshaping the future of Solana memes! </Text>
            </Flex>
        </Flex>

        </Flex>


        </Flex>
  )
}

export default About