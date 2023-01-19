import { Global } from '@emotion/react'
import { Head } from 'next/document'

const Fonts = () => (
    <Global
      styles={`
      @font-face {
        font-family: 'Heading Font';
        src: url('./fonts/Montserrat-Black.ttf');
        font-display: swap;
      }
      @font-face {
        font-family: 'Medium Font';
        src: url('./fonts/Montserrat-Medium.ttf');
        font-display: swap;
      }
      @font-face {
        font-family: 'Body Font';
        src: url('./fonts/Montserrat-VariableFont_wght.ttf');
        font-display: swap;
      }
      `} 
    />
)

export default Fonts

