import PostButton from '@/components/post-button'
import createPost from '@/server/actions/create-posts'
import getPosts from '@/server/actions/get-posts'
import Image from 'next/image'

export default async function Home() {
  const { error, success } = await getPosts()

  if (error) {
    throw new Error(error)
  }

  if (success) {
    return (
      <main>
        {success.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
        <form action={createPost}>
          <input className={'bg-black'} name={'title'} placeholder={'Title'} type={'text'} />
          <PostButton />
        </form>
        <Image alt={'Vercel Logo'} height={72} src={'/vercel.svg'} width={72} />
      </main>
    )
  }
}
