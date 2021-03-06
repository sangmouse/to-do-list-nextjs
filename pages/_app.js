import React from 'react'
import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import '../styles/style.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}