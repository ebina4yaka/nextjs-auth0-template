import Link from 'next/link'
import { ReactElement } from 'react'
import { useUser } from '../lib/user'

export default function Header(): ReactElement {
  const { user, loading } = useUser()

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/protected-page">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Protected Page</a>
            </Link>
          </li>
          {!loading &&
            (user ? (
              <>
                <li>
                  <Link href="/profile">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Profile</a>
                  </Link>
                </li>{' '}
                <li>
                  <a href="/profile-ssr">Profile (SSR)</a>
                </li>{' '}
                <li>
                  <a href="/api/logout">Logout</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/api/login">Login</a>
                </li>
              </>
            ))}
        </ul>
      </nav>

      <style jsx>
        {`
          header {
            padding: 0.2rem;
            color: #fff;
            background-color: #333;
          }
          nav {
            max-width: 42rem;
            margin: 1.5rem auto;
          }
          ul {
            display: flex;
            list-style: none;
            margin-left: 0;
            padding-left: 0;
          }
          li {
            margin-right: 1rem;
          }
          li:nth-child(3) {
            margin-right: auto;
          }
          a {
            color: #fff;
            text-decoration: none;
          }
          button {
            font-size: 1rem;
            color: #fff;
            cursor: pointer;
            border: none;
            background: none;
          }
        `}
      </style>
    </header>
  )
}
