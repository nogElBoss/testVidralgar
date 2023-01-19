import { Text, Flex } from "@chakra-ui/react"

type TitleText = {
    title: string,
    text: string
}

export const TitleText = ({ title, text }: TitleText) => {
    return (
        <Flex px={10} py={12} direction="column">
            <Text w="100%" mb={4} fontFamily="medium" color="green" fontSize={23}>
                {title}
            </Text>

            <Text w="100%">
                {text}
            </Text>
        </Flex>
    )
}