import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys)

const vidralgarInput = definePartsStyle({
    field: {
        color: "black",
        borderRadius: '0px',
        fontFamily: "medium",
        _placeholder: {
            color: "black",
            fontFamily: "medium",
        }
    }
})

export const inputTheme = defineMultiStyleConfig({
    variants: { vidralgarInput },
})

