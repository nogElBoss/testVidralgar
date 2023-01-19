import { Flex } from "@chakra-ui/react"
import Link from "next/link"

type NavBar = {
  onClick
}

export const NavBar = ({ onClick }: NavBar) => {
  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      alignItems={["start", "start", "start", "center"]}
      fontFamily="medium"
      fontSize={[40, 40, 40, 13]}
      gap={[2, 2, 2, 7]}
      color={["white", "white", "white", "black"]}
    >
      <Link href="/" onClick={onClick}>APRESENTAÇÃO</Link>
      <Link href="/aboutUs" onClick={onClick}>SOBRE NÓS</Link>
      <Link href="/glass" onClick={onClick}>O VIDRO</Link>
      <Link href="/" onClick={onClick}>PORTEFÓLIO</Link>
      <Link href="/contact" onClick={onClick}>CONTACTOS</Link>
    </Flex>
  )
}