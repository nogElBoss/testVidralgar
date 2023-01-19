import { Flex, Box } from "@chakra-ui/react"
import { FirstSection } from "../components/organisms/aboutUs/FirstSection"
import { SecondSection } from "../components/organisms/aboutUs/SecondSection"
import { BlankSection } from "../components/organisms/BlankSection"

export default function AboutUs () {
    
    return(
        <>
            <Flex w="100%" direction={["column", "column", "column", "column"]}>

                <FirstSection/>

                <Box h="1px" w="100vw" bg="gray"/>

                <SecondSection/>

                <Box h="1px" w="100vw" bg="gray"/>

                <BlankSection/>

            </Flex>

            
            
        </>
    )
}