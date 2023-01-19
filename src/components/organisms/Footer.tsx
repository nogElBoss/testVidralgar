import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react"
import { BottomFooter } from "../molecules/BottomFooter"
import { TopFooter } from "../molecules/TopFooter"

export const Footer = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Grid templateColumns={["100%", "100%", "100%", "12% 76% 12%"]} gap="1px" bg="gray" borderTopWidth="1px" borderTopColor="gray" overflow="hidden">
            {isDesktop ?
                <GridItem w='100%' h='auto' bg='white'>
                </GridItem>
                : <></>}

            <GridItem w='100%' h='auto' bg='white'>
                <TopFooter />
            </GridItem>

            {isDesktop ?
                <GridItem w='100%' h='auto' bg='white'>
                </GridItem>
                : <></>}

            {isDesktop ?
                <GridItem w='100%' h='auto' bg='white'>
                </GridItem>
                : <></>}

            <GridItem w='100%' h='auto' bg='white'>
                <BottomFooter isFooter={true} />
            </GridItem>

            {isDesktop ?
                <GridItem w='100%' h='auto' bg='white'>
                </GridItem>
                : <></>}
        </Grid>
    )
}