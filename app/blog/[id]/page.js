import React from 'react';

const BlogPage = ({params}) => {
    console.log(params.id);
    return (
        <div>
            This is page for blog. {params.id}
        </div>
    );
};

export default BlogPage;