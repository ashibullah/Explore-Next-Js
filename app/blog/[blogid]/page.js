const BlogPage = async ({ params }) => {
    const { blogid } = await params;  // unwrap the promise
    return (
        <div>
            <p>This is page for blog = {blogid}</p>
        </div>
    );
};

export default BlogPage;