import React from 'react'
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Box,
  useBreakpointValue
} from "@chakra-ui/react";
import memeBg from '../Assets/memenomics.png'
import chart from '../Assets/chart.png'

const Memenomics = () => {
  return (
     <Flex
      direction={"row"}
      backgroundImage={memeBg}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      justifyContent={'space-between'}
      p={2}
      id='memnomics'
    >

        
<Flex w ={'100%'} justifyContent={"space-between"} px={useBreakpointValue({
    base: "1%",
    md: "1%",
    lg: "5%"
})} alignItems={'center'}
gap={10}
direction={useBreakpointValue({
    base: "column",
    md: "column",
    lg: "row"
})}>

    <Flex direction={'column'} w={useBreakpointValue({
        base: "100%",
        md: "100%",
        lg: '50%'
    })} px={useBreakpointValue({
        base: "4%",
        md: "4%",
        lg: "10%"
    })} >
        <Card bgColor={'#893A1B'} w={useBreakpointValue({
            base: "85vw",
            md: "85vw",
            lg: "35vw"
        })} >
            <CardBody >
                <Flex direction={'column'} justifyContent={'center'} color={'#FFA81D '} gap={5}> 
                    <Heading textAlign={'center'}
                    textDecoration={'underline'}
                    >Tokenomics</Heading>
                    <Text textAlign={'center'} fontSize={'x-large'}
                    fontWeight={'400'} >Total Supply: 1,000,000,000</Text>
                        <Flex  alignItems={'center'} gap={10}>
                           <Box alignSelf={'center'} height={'7vh'} width={useBreakpointValue({
                                base: "13vw",
                                md: "13vw",
                                lg: '4vw'
                            })} 
                            display={useBreakpointValue({
                                base: "none",
                                md: "none",
                                lg: "block"
                            })}
                            backgroundColor={'blue'}>

                            </Box>

                            <Text fontSize={'x-large'}>Community</Text>

                            <Text fontSize={'x-large'}>93%</Text>
                        </Flex>


                         <Flex alignItems={'center'} gap={10}>
                           <Box alignSelf={'center'} height={'7vh'} width={useBreakpointValue({
                                base: "13vw",
                                md: "13vw",
                                lg: '4vw'
                            })} 
                            display={useBreakpointValue({
                                base: "none",
                                md: "none",
                                lg: "block"
                            })}
                            backgroundColor={'#00a551'}>

                            </Box>

                            <Text fontSize={'x-large'} >Ecosystem development
</Text>

                            <Text fontSize={'x-large'}>7%</Text>
                        </Flex>
                    </Flex>
            </CardBody>
        </Card>
         </Flex>


        <Flex  w={useBreakpointValue({
            base: "100%",
            md: "100%",
            lg:'40%'
        })} justifyContent={'center'}>
            <Image src={chart} alt='memnomics' w={useBreakpointValue({
                base: "70%",
                md: "70%",
                lg: '70%'
            })}/>
        </Flex>


        </Flex>



        </Flex>
  )
}

export default Memenomics