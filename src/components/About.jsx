import React from 'react'
import about from '../Assets/about.png'
import { Flex, Image, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import rocket from '../Assets/rocket.png'

const About = () => {
  return (
     <Flex
      direction={"column"}
      h={useBreakpointValue({
        base: "95vh",
        md: "95vh",
        lg: "70vh"
      })}
      backgroundImage={about}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      overflow={'hidden'}
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

            <Flex direction={'column'} justifyContent={'center'} gap={5}>
                <Text fontSize={'x-large'}>We're the bedrock for INSANE GAINS on solana!</Text>

                <Text fontSize={'large'}>We're all about that community love - our devs are here for the long haul, not looking to cash out, &apos;cause we&apos;re all in this together working to build a strong community with skilled team members dedicatedto long-term success</Text>
            </Flex>
        </Flex>

        </Flex>


        </Flex>
  )
}

export default About