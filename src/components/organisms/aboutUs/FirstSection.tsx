import { Grid, GridItem, useBreakpointValue, Text, Box } from "@chakra-ui/react"

export const FirstSection = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Grid
            templateColumns={["100%", "100%", "100%", "12% 76% 12%"]}
            gap="1px"
            bg="gray"
            position="relative"
            minH="100vh"
            h="auto"
        >
            {isDesktop ?
                <GridItem w='100%' bg='white'>
                </GridItem>
                : <></>}

            <GridItem w='100%' bg='white' px={[10, 10, 10, 10]} pt={[20, 20, 20, 50]} pb={[20, 20, 20, 100]}>
                <Text w={["100%", "100%", "100%", "60%"]} mb={10}>
                    A Vidralgar é uma empresa que se dedica à indústria e transformação de vidros e conta com
                    mais de 30 anos de experiência no sector.A Vidralgar é uma empresa que se dedica à indústria
                    e transformação de vidros e conta com mais de 30 anos de experiência no sector. Sediada em
                    Vilamoura a Vidralgar é uma empresa que tem tido um crescimento sustentado ao longo dos anos
                    com constantes investimentos em equipamento de transformação e armazenamento de vidros apresentando
                    um crescimento médio anual de 25%.
                </Text>

                <Text w={["100%", "100%", "100%", "60%"]}>
                    É composta por uma equipa jovem, dinâmica e qualificada para uma prescrição de produtos na vertente
                    térmica, acústica e de segurança. Oferece serviços de qualidade, na venda e no pós-venda, de modo
                    a satisfazer os requisitos dos seus clientes.
                    Preocupada com o desenvolvimento sustentável, a empresa faz a reciclagem dos seus
                    resíduos, nomeadamente do vidro, tendo para isso contratado uma empresa especializada
                    na sua recolha e reciclagem. Nesse sentido, a Vidralgar, está em fase de implementação de um Sistema
                    de Gestão de Qualidade, segundo a NP ISO 9000:2001, com o objectivo de obter brevemente a Certificação
                    em Qualidade.
                </Text>
            </GridItem>

            {isDesktop ?
                <GridItem w='100%' bg='white'>
                </GridItem>
                : <></>}

            <Box
                w={["100vw", "100vw", "100vw", "30vw"]}
                position={["relative", "relative", "relative", "absolute"]}
                right={0}
                h={["100vw", "100vw", "100vw", "80vh"]}
                bgImage="/images/aboutUs.png"
                bgSize="cover"
            />

        </Grid>
    )
}