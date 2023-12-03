import React from 'react'
import { signOut } from '../auth'

export type SignOutProps = Readonly<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const SignOut: React.FC<SignOutProps> = (props) => {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button {...props}>Sign out</button>
    </form>
  )
}
