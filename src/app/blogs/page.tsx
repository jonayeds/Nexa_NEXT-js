"use client"

import BlogCard from "@/components/ui/BlogCard"
import { useGetBlogsQuery } from "@/redux/api/blogs.slice"
import { Blog } from "@/types"

// export const metadata = {
//     title:"NexaBlog | Blogs"
// }

const BlogsPage = () => {
    // const res = await fetch("http://localhost:8000/blogs",{
    //     cache:"no-cache"
    // })
    // const blogs = await res.json()
    const {data:blogs, isLoading} = useGetBlogsQuery({})
    console.log(blogs)
  return (
    <div>
        <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-teal-600">Blogs</span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-4 max-w-[90vw] mx-auto md:grid-cols-2 grid-cols-1 my-4 ">
        {
            blogs?.map((item:Blog)=> <BlogCard key={item.id} blog={item}/>)
        }
      </div>
    </div>
  )
}

export default BlogsPage