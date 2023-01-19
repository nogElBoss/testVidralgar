import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Box,
  Text
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { NavBar } from '../molecules/NavBar'
import Image from "next/image"

export const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        py={{ base: '3', lg: '4' }}
        px={{ base: '5', lg: '20' }}
        w="100vw"
        justify="space-between"
        borderBottomWidth="1px"
        borderBottomColor="gray"
        position="relative"
      >
        <Flex w={[220, 220, 220, 250]} alignItems="center">
          <Image src="/images/vidralgar_logo.png" width={120} height={0} alt={''} />
          <Spacer />
          <Box h="56px" w="1px" bg="darkgray" position="absolute" top={0} left={[196, 196, 196, 285]} />
          <Text fontFamily="medium" fontSize={7} transform="rotate(-90deg)" color="darkgray" position="absolute" top="14px" left={[171, 171, 171, 260]}>
            Membro do
          </Text>
          <Image src="/images/group_logo.png" width={35} height={0} alt={''} />
        </Flex>
        {isDesktop ? (
          <NavBar onClick={onClose} />
        ) : (
          <IconButton
            onClick={onOpen}
            variant="ghost-on-accent"
            icon={<FiMenu fontSize="1.25rem" />}
            aria-label="Open Menu" />
        )}
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size="full"
        onClose={onClose}
      >
        <DrawerContent display={isDesktop ? "none" : ""}>
          <DrawerCloseButton py={4} px={5} size="10px" color="white" />

          <Flex h="100%" w="100%" justifyContent="center" pt={180} bg="green" >
            <NavBar onClick={onClose} />
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  )
}