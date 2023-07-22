import React from 'react'
import { CSRF_experimental } from '../auth'

export type SignOutProps = Readonly<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const SignOut: React.FC<SignOutProps> = (props: any) => {
  return (
    <form action="/auth/signout" method="post">
      <button {...props} />
      <CSRF_experimental />
    </form>
  )
}
