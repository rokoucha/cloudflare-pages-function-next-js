export const runtime = 'edge'

export default async function Page() {
  console.log(process.env.DB)

  async function handleSubmit() {
    'use server'

    console.log(process.env.DB)
  }

  return (
    <div>
      <h1>Hello, Next.js with Server Actions!</h1>
      <form action={handleSubmit}>
        <button type="submit">Call server action</button>
      </form>
    </div>
  )
}
