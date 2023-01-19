import { useBreakpointValue, Box } from "@chakra-ui/react"
import { BlankSection } from "../components/organisms/BlankSection"
import { FirstSection } from "../components/organisms/glass/FirstSection"
import { SecondSection } from "../components/organisms/glass/SecondSection"

export default function Glass() {
    return (
        <>
            <FirstSection />

            <Box w="100%" h="1px" bg="gray" />

            <SecondSection />

            <Box w="100%" h="1px" bg="gray" />

            <BlankSection />

        </>
    )
}