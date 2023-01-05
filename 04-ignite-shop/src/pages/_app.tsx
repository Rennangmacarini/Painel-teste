import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

import Image from 'next/image';

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container> 
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
     <Component {...pageProps} />
    </Container>
  )
}
