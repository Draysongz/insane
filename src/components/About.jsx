import React from 'react'
import about from '../Assets/about.png'
import { Flex, Image, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import rocket from '../Assets/rocket.png'

const About = () => {
  return (
     <Flex
      direction={"column"}
      backgroundImage={about}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      id='about'
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

                <Text fontSize={'large'} wordBreak={"keep-all"}>   NOTE‼️‼️
$INSANE Is beyond "just a meme token", it is a UTILITYMEME! <br/> <br/>


We believe that a vibrant, lovely & committed community, is the major life of any project. Hence we've decided to build one of the GREATEST crypto/web3 community ever known in the solana ecosystem, with soo much value in it.... <br/> <br/>


Everyone of the team members, starting from the dev, is part of the COMMUNITY! & committed to this course together with other community members to build this LASTING LEGACY, of reforming the perception(only 1 out of every 100 projects gets to really do great) about solana memes... <br/> <br/>

WE ARE CHANGING THE NARRATIVE FOR BETTER, ENOUGH!!! OF THE "boring normals" WITH SOLANA MEMES, IT CAN BE BRAVE & BETTER! </Text>
            </Flex>
        </Flex>

        </Flex>


        </Flex>
  )
}

export default About