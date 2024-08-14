import { Flex, Image, Box, Text, Button, useBreakpointValue, Icon } from '@chakra-ui/react'
import React from 'react'
import logo from '../Assets/logo.png'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'

const Navbar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
    backgroundColor={'#893a1b'}
    w={'85vw'}
    borderRadius={'10px'}
   
    >
        

        <Flex justifyContent={'space-evenly'} alignItems={'center'} color={'white'}
         display={useBreakpointValue({base: 'none', md: 'none', lg: 'flex'})}>
            <Image src={logo}  alt='insane logo' w={'17%'} />
            <a href='#home'><Text>Home</Text></a>
            <a href='#about'><Text cursor={'pointer'}>About</Text></a>
            <a href='#memnomics'><Text>Memenomics</Text></a>
            <Button w={'15vw'}
            color={'white'}
            bgColor={"#00A550"}
            borderRadius={'20px'}>Buy $INSANE</Button>
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

         <Icon as={HamburgerIcon} boxSize={6} color={'white'} onClick={onOpen} />
        </Flex>
 <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
         

          <DrawerBody>
             <Flex justifyContent={'space-between'} alignItems={'center'} color={'#FFA81D '}direction={'column'} h={'60vh'}
         display={useBreakpointValue({base: 'flex', md: 'flex', lg: 'none'})}>
            <Image src={logo}  alt='insane logo' w={'100%'} />
            <a href='#home' onClick={()=>onClose}><Text>Home</Text></a>
            <a href='#about' onClick={()=>onClose()}><Text cursor={'pointer'}>About</Text></a>
            <a href='#memnomics' onClick={()=>onClose()}><Text>Memenomics</Text></a>
            <Button w={'35vw'}
            color={'white'}
            bgColor={"#00A550"}
            borderRadius={'20px'}>Buy $INSANE</Button>
        </Flex>
          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Navbar