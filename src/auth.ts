import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

declare module 'next-auth' {
  interface Session {
    user?: {
      name: string
      email: string
      picture: string
      sub: string
      iat: number
      exp: number
      jti: string
    }
  }
}

export const { auth, handlers, CSRF_experimental } = NextAuth({
  providers: [GitHub],
})
