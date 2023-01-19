import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react"
import { TitleText } from "../../molecules/TitleText"

export const SecondSection = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true})
    return(
        <Grid
            templateColumns={["100%", "100%", "100%", "12% 38% 38% 12%"]}
            gap="1px"
            bg="gray"
            h="auto"
        >
            {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

            <GridItem w='100%' bg='white'>
                <TitleText
                    title="Medição e Orçamentação"
                    text="Dispomos de um técnico especializado para todo o tipo
                    de medições e orçamentações."
                />
            </GridItem>

            <GridItem w='100%' bg='white'>
                <TitleText
                    title="Distribuição"
                    text="Dispomos de uma frota automóvel para transportar todo 
                    o equipamento que comercializamos, em segurança."
                />
            </GridItem>

            {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

            {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

            <GridItem w='100%' bg='white'>
                <TitleText
                    title="Montagem"
                    text="Dispomos de pessoal especializado para todo o tipo 
                    de montagens."
                />
            </GridItem>

            <GridItem w='100%' bg='white'>
                <TitleText
                    title="Clientes"
                    text="Preocupada com o bom relacionamento e satisfação 
                    dos seus clientes, a Vidralgar, dá garantia e assistência 
                    nos serviços após venda."
                />
            </GridItem>

            {isDesktop ?
            <GridItem w='100%' bg='white'>
            </GridItem>
            : <></>}

        </Grid>
    )
}