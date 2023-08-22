import Link from 'next/link'

export default function Home() {
  return (<>
    <h1>Home</h1>
    <p><Link href="/blog-app/">App Router</Link></p>
    <p><Link href="/blog-pages/">Pages Router</Link></p>
  </>)
}
