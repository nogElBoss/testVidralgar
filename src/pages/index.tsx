import { Box, Button, ButtonGroup, Flex, Heading, HStack, Input, Textarea } from '@chakra-ui/react'

export default function Index () {
  return(
    <>
      <Heading fontFamily="heading">Vidralgar</Heading>
      <Heading fontFamily="medium">Vidralgar</Heading>
      <Heading fontFamily="medium" color="green">Vidralgar</Heading>
      <Heading fontFamily="body">Vidralgar</Heading>
      <Flex
        m={3}
        fontFamily="body"
      >
        <Box bgColor="white" h={12} w={12}/>
        <Box bgColor="gray" h={12} w={12}/>
        <Box bgColor="black" h={12} w={12}/>
        <Box bgColor="green" h={12} w={12}/>
        <Box bgColor="darkGreen" h={12} w={12}/>
      </Flex>
      <Button variant="vidralgarButton" m={3}>
        Button
      </Button>
      <Input placeholder='Input' variant="vidralgarInput"/>
      <Textarea placeholder='Input' variant="vidralgarTextArea"/>
      
    </>
  )
}
