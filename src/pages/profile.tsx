import { ReactElement } from 'react'
import Layout from '../templates/Layout'
import { useFetchUser } from '../lib/user'

export default function Profile(): ReactElement {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Profile</h1>

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
