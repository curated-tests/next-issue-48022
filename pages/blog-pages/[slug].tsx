import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter() // Works on client
  return <h1>Slug is {router.query.slug}</h1>
}

/* Works at build time too:
export async function getStaticPaths() {
  return { 
    paths: [
      { params: { slug: 'one' } },
      { params: { slug: 'two' } },
    ],
    fallback: false,
  }
}
*/
