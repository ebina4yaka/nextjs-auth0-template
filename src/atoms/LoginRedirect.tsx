import Router from 'next/router'
import { Component, ReactElement } from 'react'

import Layout from '../templates/Layout'
import createLoginUrl from '../lib/url-helper'

export default class RedirectToLogin extends Component {
  componentDidMount(): void {
    window.location.assign(createLoginUrl(Router.pathname))
  }

  render(): ReactElement {
    return (
      <Layout loading>
        <div>Signing you in...</div>
      </Layout>
    )
  }
}
