import React from 'react'
import { CSRF_experimental } from '../auth'

export type SignInProps = Readonly<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const SignIn: React.FC<SignInProps> = (props) => {
  return (
    <form action="/auth/signin/github" method="post">
      <button {...props} />
      <CSRF_experimental />
    </form>
  )
}
