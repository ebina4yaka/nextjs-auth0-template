import { ReactElement, ReactNode } from 'react'
import Header from '../organisms/Header'
import { UserProvider } from '../lib/user'

type Props = {
  // eslint-disable-next-line react/require-default-props, @typescript-eslint/no-explicit-any
  user?: any
  loading: boolean
  children: ReactNode
}

export default function Layout(props: Props): ReactElement {
  const { user, loading, children } = props
  return (
    <UserProvider value={{ user, loading }}>
      <Header />

      <main>
        <div className="container">{children}</div>
      </main>

      <style jsx>
        {`
          .container {
            max-width: 42rem;
            margin: 1.5rem auto;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            margin: 0;
            color: #333;
            font-family: -apple-system, 'Segoe UI';
          }
        `}
      </style>
    </UserProvider>
  )
}
