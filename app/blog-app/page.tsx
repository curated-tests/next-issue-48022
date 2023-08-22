import Link from 'next/link'

export default function BlogApp() {
  return (<>
    <h1>Blog App Router</h1>
    <p><Link href="/blog-app/one/">One</Link></p>
    <p><Link href="/blog-app/two/">Two</Link></p>
  </>)
}
