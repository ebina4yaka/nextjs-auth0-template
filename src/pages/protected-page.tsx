import { ReactElement } from 'react'
import Layout from '../templates/Layout'
import { useFetchUser } from '../lib/user'
import WithAuth from '../templates/WithAuth'

export function ProtectedPage(): ReactElement {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Protected Page</h1>

      {loading && <p>Loading profile...</p>}

      {!loading && user && (
        <>
          <p>Profile:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  )
}

export default WithAuth(ProtectedPage)
