import {
  Component,
  ComponentType,
  ElementType,
  FunctionComponent,
  ReactChild,
  ReactChildren,
} from 'react'

import auth0 from '../lib/auth0'
import { fetchUser } from '../lib/user'
import createLoginUrl from '../lib/url-helper'
import RedirectToLogin from '../atoms/LoginRedirect'

type AuthenticatedProps = {
  user?: never
  loading: boolean
  children: ReactChild | ReactChildren
}

export default function WithAuth(
  InnerComponent: ElementType | FunctionComponent
): ComponentType {
  return class Authenticated extends Component<AuthenticatedProps> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async getInitialProps(ctx: any) {
      if (!ctx.req) {
        const user = await fetchUser()
        return {
          user,
        }
      }

      const session = await auth0.getSession(ctx.req)
      if (!session || !session.user) {
        ctx.res.writeHead(302, {
          Location: createLoginUrl(ctx.req.url),
        })
        ctx.res.end()
        // eslint-disable-next-line consistent-return
        return
      }

      return { user: session.user }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props) {
      super(props)
    }

    render() {
      // eslint-disable-next-line react/destructuring-assignment
      if (!this.props.user) {
        return <RedirectToLogin />
      }

      return (
        <div>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading,react/destructuring-assignment */}
          <InnerComponent {...this.props} user={this.props.user} />
        </div>
      )
    }
  }
}
