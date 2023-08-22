import Link from 'next/link'

export default function BlogPage() {
  return (<>
    <h1>Blog Pages Router</h1>
    <p><Link href="/blog-pages/one/">One</Link></p>
    <p><Link href="/blog-pages/two/">Two</Link></p>
  </>)
}
