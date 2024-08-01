import { Flex, Image, Box, Text, Button, useBreakpointValue, Icon } from '@chakra-ui/react'
import React from 'react'
import logo from '../Assets/logo.png'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <Flex
    backgroundColor={'#893a1b'}
    w={'85vw'}
    borderRadius={'10px'}
   
    >
        

        <Flex justifyContent={'space-evenly'} alignItems={'center'} color={'white'}
         display={useBreakpointValue({base: 'none', md: 'none', lg: 'flex'})}>
            <Image src={logo}  alt='insane logo' w={'17%'} />
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Memenomics</Text>
            <Button w={'15vw'}
            color={'white'}
            bgColor={"#00A550"}
            borderRadius={'20px'}>Buy $Insane</Button>
        </Flex>


        <Flex
    backgroundColor={'#893a1b'}
    w={'85vw'}
    borderRadius={'10px'}
    display={useBreakpointValue({base: 'flex', md: 'flex', lg: 'none'})}
    justifyContent={'space-between'}
    alignItems={'center'}
    p={2}>

         <Image src={logo}  alt='insane logo' w={'40%'} />

         <Icon as={HamburgerIcon} boxSize={6} color={'white'} />
        </Flex>

    </Flex>
  )
}

export default Navbar