import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ProvideUser } from "../util/auth"


function MyApp({ Component, pageProps }) {
    return (
    <ChakraProvider>
        <ProvideUser>      
            <Component {...pageProps} />
        </ProvideUser>
    </ChakraProvider>
    )
}

export default MyApp
