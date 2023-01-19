import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from './button'
import { inputTheme } from './input'
import { textareaTheme } from './textarea'
import "@fontsource/montserrat"

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Textarea: textareaTheme,
  },
  fonts: {
    heading: `'Heading Font', sans-serif`,
    medium: `'Medium Font', sans-serif`,
    body: `'Body Font', sans-serif`,
  },
  colors: {
    black: '#000000',
    gray: '#cecece',
    darkgray: '#7d8594',
    white: '#ffffff',
    green: '#4c7f56',
    darkGreen: '#4c6051',
  },
})

export default theme
