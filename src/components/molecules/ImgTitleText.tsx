import { Text, Flex, Box, useBreakpointValue } from "@chakra-ui/react"

type ImgTitleText = {
    title: string,
    text: string,
    left: boolean
    img: string
}

export const ImgTitleText = ({ title, text, left, img }: ImgTitleText) => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const direction = left || !isDesktop ? "column" : "column-reverse"
    return (
        <Flex direction={direction}>
            <Box w="100%" h={28} bgImage={img} bgSize="cover" />
            <Flex px={10} py={12} direction="column">
                <Text w="100%" mb={4} fontFamily="medium" color="green" fontSize={23}>
                    {title}
                </Text>

                <Text w="100%">
                    {text}
                </Text>
            </Flex>
        </Flex>

    )
}