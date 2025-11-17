export async function generateMetadata({ params }) {
  const { blogid } = await params;
  
  return {
    title: `Blog ${blogid} - My Next Js App`,
    description: `Read blog post number ${blogid}`,
  };
}

const BlogPage = async ({ params }) => {
    const { blogid } = await params;
    
    return (
        <div>
            <p>This is page for blog = {blogid}</p>
        </div>
    );
};

export default BlogPage;