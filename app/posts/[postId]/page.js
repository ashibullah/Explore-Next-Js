import CommentBox from '@/app/Components/CommentBox';
import getComment from '@/lib/getComment';
import getSinglePost from '@/lib/getSinglePost';
import React from 'react';

export const generateMetadata = async ({ params }) => {
    const { postId } = await params;
    const result = await getSinglePost(postId);

    return {
        title: result.title,
        description: result.body,
    }

}

const post = async ({ params }) => {
    const { postId } = await params;

    const postPromise = getSinglePost(postId);
    const commentPromise = getComment(postId);
    const [postResult, commentResult] = await Promise.all([postPromise, commentPromise]);
    // console.log(commentResult[0])

    // console.log(result.title);
    // console.log(result);

    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold'>{postResult.title}</h1>
                <p className='mt-2'>{postResult.body}</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-4 mb-2'>Comments</h1>
                    <div className='grid gap-2 bg-gray-800 p-4 rounded-2xl'>
                    {
                    commentResult.map((comment) => (
                        <CommentBox key={comment.id} commentResult={comment} />
                    ))
                }
                </div>
                
            </div>

        </div>
    );
};

export default post;