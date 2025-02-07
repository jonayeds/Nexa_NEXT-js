import BlogDetailsCard from "@/components/ui/BlogDetailsCard"
import { Blog } from "@/types"

export const generateStaticParams = async()=>{
    const res = await fetch(`http://localhost:8000/blogs`)
    const blogs = await res.json()
    return blogs.slice(0,3).map((item:Blog)=>({blogId:item.id}))
}


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