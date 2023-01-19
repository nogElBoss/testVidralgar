import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react"
import { ImgTitleText } from "../../molecules/ImgTitleText"

export const SecondSection = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
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
                <ImgTitleText
                    title="Vidros Duplos"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce in massa non tortor tempus tincidunt."
                    left={true}
                    img="/images/glassImages/img1.png"
                />
            </GridItem>

            <GridItem w='100%' bg='white'>
                <ImgTitleText
                    title="Vidros Duplos"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce in massa non tortor tempus tincidunt."
                    left={false}
                    img="/images/glassImages/img2.png"
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
                <ImgTitleText
                    title="Vidros Duplos"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce in massa non tortor tempus tincidunt."
                    left={true}
                    img="/images/glassImages/img3.png"
                />
            </GridItem>

            <GridItem w='100%' bg='white'>
                <ImgTitleText
                    title="Vidros Duplos"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce in massa non tortor tempus tincidunt."
                    left={false}
                    img="/images/glassImages/img4.png"
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
                <ImgTitleText
                    title="Vidros Duplos"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce in massa non tortor tempus tincidunt."
                    left={true}
                    img="/images/glassImages/img5.png"
                />
            </GridItem>

            <GridItem w='100%' bg='white'>
                <ImgTitleText
                    title="Vidros Duplos"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce in massa non tortor tempus tincidunt."
                    left={false}
                    img="/images/glassImages/img6.png"
                />
            </GridItem>

            {isDesktop ?
                <GridItem w='100%' bg='white'>
                </GridItem>
                : <></>}

        </Grid>
    )
}