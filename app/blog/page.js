import Link from 'next/link';
import React from 'react';
// throw new Error('Failed to fetch data for About page'); 
const blogs = [{
    id:1,
    tittle: 'The first blog contains about Ai',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sint.',
},{
    id:2,
    tittle: 'The Second blog contains about Machine Learning',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sint.',
},{
    id:3,
    tittle: 'The 3rd blog contains about Machine Learning',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sint.',
},{
    id:4,
    tittle: 'The 4th blog contains about Machine Learning',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sint.',
}]

export const metadata = {
  title: "Blog Page - My Next Js App",
  description: "Blog Page Next Js App",
};

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl'>Blogs</h1>
            <div className='flex gap-6 mt-3'>

            
            {
                blogs.map(blog=> <div key={blog.id}>
                    <Link href={`/blog/${blog.id}`}>{blog.tittle}</Link>
                </div>)
            }
        </div>
        </div>
    );
};

export default Blog;