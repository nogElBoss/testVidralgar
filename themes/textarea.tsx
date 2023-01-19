import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const vidralgarTextArea = defineStyle({
        color: "black",
        borderRadius: '0px',
        fontFamily: "medium",
        _placeholder: {
            color: "black",
            fontFamily: "medium",
        }
})

export const textareaTheme = defineStyleConfig({
    variants: { vidralgarTextArea },
})