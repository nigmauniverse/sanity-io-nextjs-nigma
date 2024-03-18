import '~/styles/global.css'
import '~/styles/swiper-button.css'
import '~/styles/testimonials.css'
import '~/styles/slider.css'
import '~/styles/stardust.css'
import '~/styles/header.css'
import '~/styles/universe.css'
import '~/styles/experiences.css'
import '~/styles/skills.css'

import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = dynamic(() => import('~/components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps

  return (
    <NextUIProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nigma LandingPage" />
        <title>nigmauniverse.com</title>
      </Head>

      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </NextUIProvider>
  )
}
