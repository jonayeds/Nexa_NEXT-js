import BlogDetailsCard from "@/components/ui/BlogDetailsCard"


const BlogDetailsPage =async ({params}:{params:Promise<{blogId:string}>}) => {
    const {blogId} = await params
    const res = await fetch(`http://localhost:8000/blogs/${blogId}`)
    const blog = await res.json()
  return (
    <div className="mt-12">
        <BlogDetailsCard blog={blog}/>
    </div>
  )
}

export default BlogDetailsPage