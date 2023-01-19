import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image"

type BottomFooter = {
    isFooter: boolean
}

export const BottomFooter = ({ isFooter }: BottomFooter) => {
    return (
        <Flex
            w="100%"
            px={10}
            pt={[20, 20, 20, 10]}
            pb={[5, 5, 5, 2]}
            justifyContent="center"
            direction="column"
            fontFamily="medium"
            gap={10}
            position="relative"
        >
            <Flex
                w="100%"
                justify="space-between"
                direction={["column", "column", "column", "row"]}
                gap={[12, 12, 12, 5]}
            >
                <Flex
                    alignItems="start"
                    direction="column"
                >
                    <Text>TEL. 289 322 390</Text>
                    <Text>FAX. 289 323 193</Text>
                    <Text>GPS N37.109393 W8.121597</Text>
                    <Text>EMAIL. geral@vidralgar.pt</Text>
                </Flex>
                <Flex
                    alignItems={["start", "start", "start", "end"]}
                    direction="column"
                >
                    <Text>CENTRO DE EMPRESAS E SERVIÇOS</Text>
                    <Text>DE VILAMOURA LOTE 6.I/21</Text>
                    <Text>-FRACÇÃO G 8125-498 VILAMOURA</Text>
                </Flex>
            </Flex>
            <Flex
                w="100%"
                justify="center"
                alignItems="end"
                fontSize="10px"
            >

                {isFooter ?
                    <Text>Vidralgar 2021 . Todos os direitos reservados</Text>
                    :
                    <></>
                }

            </Flex>
            <Box
                position="absolute"
                right={10}
                bottom={[360, 360, 360, 2]}
            >
                {isFooter ?
                    <Image src={"/images/footerLogos/cofinanciado.png"} alt={""} width={200} height={5} />
                    :
                    <></>
                }

            </Box>
        </Flex >

    )
}