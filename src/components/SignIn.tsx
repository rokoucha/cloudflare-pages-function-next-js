import React from 'react'

export type SignInProps = Readonly<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const SignIn: React.FC<SignInProps> = (props) => {
  return (
    <form action="/auth/signin/github" method="get">
      <button {...props}>Sign in with GitHub</button>
    </form>
  )
}
