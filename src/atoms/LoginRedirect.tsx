import Router from 'next/router'
import { ReactElement, useEffect } from 'react'

import Layout from '../templates/Layout'
import createLoginUrl from '../lib/url-helper'

export default function LoginRedirect(): ReactElement {
  useEffect(() => {
    window.location.assign(createLoginUrl(Router.pathname))
  }, [])
  return (
    <Layout loading>
      <div>Signing you in...</div>
    </Layout>
  )
}
