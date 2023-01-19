import { Box, Grid, GridItem, useBreakpointValue, FormControl, Input, Textarea, Select, Button } from "@chakra-ui/react"
import { BottomFooter } from "../components/molecules/BottomFooter"
import { BlankSection } from "../components/organisms/BlankSection"

export default function Contact() {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <>
      <Grid
        templateColumns={["100%", "100%", "100%", "12% 76% 12%"]}
        gap="1px"
        bg="gray"
        position="relative"
        h="auto"
      >
        {isDesktop ?
          <GridItem w='100%' bg='white'>
          </GridItem>
          : <></>}

        <GridItem w='100%' bg='white' pb={180}>
          <BottomFooter isFooter={false} />
        </GridItem>

        {isDesktop ?
          <GridItem w='100%' bg='white'>
          </GridItem>
          : <></>}

      </Grid>

      <Box w="100%" h="1px" bg="gray" />

      <FormControl>
        <Grid
          templateColumns={["100%", "100%", "100%", "12% 38% 38% 12%"]}
          gap="1px"
          bg="gray"
          position="relative"
          h="auto"
        >
          {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

          <GridItem w='100%' bg='white' p={5}>
            <Input placeholder='Nome' variant="vidralgarInput" type="name" />
          </GridItem>

          <GridItem w='100%' bg='white' p={5}>
            <Input placeholder='Email' variant="vidralgarInput" type="email" />
          </GridItem>

          {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

          {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

          <GridItem w='100%' bg='white' p={5}>
            <Input placeholder='Telefone' variant="vidralgarInput" type="tel" />
          </GridItem>

          <GridItem w='100%' bg='white' p={5}>
            <Input placeholder='Localização' variant="vidralgarInput" type="text" />
          </GridItem>

          {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

          {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

          <GridItem w='100%' bg='white' px={9} py={5} fontFamily="medium" fontSize={20}>
            <Select placeholder='Selecione uma opção' variant="unstyled">
              <option value='orcamento'>Pedido de Orçamento</option>
              <option value='orcamento'>Pedido de Orçamento</option>
              <option value='orcamento'>Pedido de Orçamento</option>
            </Select>
          </GridItem>

          <GridItem w='100%' bg='white' p={5}>
            <Input placeholder='Introdução' variant="vidralgarInput" />
          </GridItem>

          {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

          {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

          <GridItem colSpan={[1, 1, 1, 2]} w='100%' bg='white' p={5} h={400} position="relative">
            <Textarea placeholder='Descrição' variant="vidralgarTextArea" h={300} resize="none" />
            <Button type="submit" variant="vidralgarButton" position={["relative", "relative", "relative", "absolute"]} bottom={0} right={0} h={65} w={["100%", "100%", "100%", 350]} >
              Submeter Pedido
            </Button>
          </GridItem>

          {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}



        </Grid>

        <Box w="100%" h="1px" bg="gray" />

        <BlankSection />

      </FormControl>

    </>
  )
}
