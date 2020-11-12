import { ReactElement } from 'react'

import Layout from '../templates/Layout'
import WithAuth from '../templates/WithAuth'
import { UserProfile } from '../lib/user'

type Props = { user: UserProfile }

function Profile(props: Props): ReactElement {
  const { user } = props
  return (
    <Layout loading={false} user={user}>
      <h1>Profile</h1>

      <div>
        <h3>Profile (server rendered)</h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </Layout>
  )
}

export default WithAuth(Profile)
