import getAllPost from '@/lib/getAllPost';
import Link from 'next/link';

export default async function Posts() {
  const posts = await getAllPost();
  console.log(posts);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Posts</h1>

      <div className='grid grid-cols-4 gap-5'>
        {posts.map(post => (
          <Link href={`/posts/${post.id}`} className='bg-blue-950 p-2 rounded-xl px-4 hover:bg-blue-800' key={post.id}>{post.title} </Link>
        ))}
      </div>
    </div>
  );
}
