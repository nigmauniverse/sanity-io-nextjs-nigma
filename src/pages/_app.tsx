import '~/styles/global.css'

import type { AppProps } from 'next/app'
import { lazy } from 'react'
import Head from 'next/head'
import {NextUIProvider} from '@nextui-org/react'


export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <NextUIProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="width=1024" /> */}
      </Head>

      <style jsx global>
        {``}
      </style>
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
