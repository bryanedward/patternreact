import { BlogTitleCard } from "./BlogCard"
import { BlogCard as BlogCardHOC } from "./BlogCard"

const BlogCard = Object.assign(BlogCardHOC,{
    Title: BlogTitleCard
})

export default BlogCard