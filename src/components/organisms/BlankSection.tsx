import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react"

export const BlankSection = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Grid
            templateColumns={["100%", "100%", "100%", "12% 76% 12%"]}
            gap="1px"
            bg="gray"
            position="relative"
            h={120}
        >
            {isDesktop ?
                <GridItem w='100%' bg='white'>
                </GridItem>
                : <></>}

            <GridItem w='100%' bg='white'>
            </GridItem>

            {isDesktop ?
                <GridItem w='100%' bg='white'>
                </GridItem>
                : <></>}
        </Grid>
    )
}