import getSinglePost from '@/lib/getSinglePost';
import React from 'react';

const  post = async ({params}) => {
    const {postId} = await params;

    const result = await getSinglePost(postId);
    // console.log(result.title);
    // console.log(result);

    return (
        <div>
            <h1 className='text-2xl font-bold'>{result.title}</h1>
            <p className='mt-2'>{result.body}</p>
        </div>
    );
};

export default post;