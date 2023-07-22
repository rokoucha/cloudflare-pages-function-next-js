import React from 'react'
import { auth } from '../auth'
import { SignIn } from '../components/SignIn'
import { SignOut } from '../components/SignOut'

export const runtime = 'edge'

const Page: React.FC = async () => {
  const session = await auth()

  return (
    <div>
      <h1>Next.js with Auth.js on Cloudflare Pages Functions</h1>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        {session ? (
          <SignOut>Sign out</SignOut>
        ) : (
          <SignIn>Sign in with GitHub</SignIn>
        )}
      </div>
    </div>
  )
}
export default Page
