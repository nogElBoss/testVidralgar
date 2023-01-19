import { ChakraProvider, Flex } from '@chakra-ui/react'


import { AppProps } from 'next/app'
import Head from 'next/head'
import Fonts from '../../themes/fonts'
import theme from '../../themes/theme'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Monserrat-Black.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/Monserrat-Medium.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-VariableFont_wght.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Flex fontSize={[15, 15, 15, 20]} lineHeight={["30px", "30px", "30px", "38px"]} direction="column" overflow="hidden">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}

export default MyApp