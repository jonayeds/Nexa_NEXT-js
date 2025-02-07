import { Blog } from "@/types"

export const  createBlog = async(data:Blog)=>{
    const res = await fetch("http://localhost:8000/blogs/",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    const blogInfo = await res.json()
    return blogInfo
}