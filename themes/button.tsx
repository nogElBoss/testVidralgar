import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const vidralgarButton = defineStyle((props) => {
    return {
        bgColor: "green",
        borderRadius: 0,
        fontFamily: "medium",
        fontSize: "13px",
        color: 'white',
        _hover: {
            bg: `darkGreen`,
            fontFamily: "medium",
        },

        _active: {
            bg: `green`,
            transform: "scale(1.05, 1.05)",
            fontFamily: "medium",
        },
    }
})

export const buttonTheme = defineStyleConfig({
    variants: { vidralgarButton },
})
