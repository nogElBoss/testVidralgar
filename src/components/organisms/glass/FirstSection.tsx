import { Grid, GridItem, useBreakpointValue, Text } from "@chakra-ui/react"

export const FirstSection = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
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

            <GridItem w='100%' bg='white' px={[10]} pt={[10]} pb={[10]}>
                <Text w={["100%", "100%", "100%", "60%"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in massa non tortor tempus
                    tincidunt. Quisque tincidunt dignissim gravida. Duis sodales ante neque, vel molestie ex
                    tincidunt r
                </Text>
            </GridItem>

            {isDesktop ?
                <GridItem w='100%' bg='white'>
                </GridItem>
                : <></>}

        </Grid>
    )
}