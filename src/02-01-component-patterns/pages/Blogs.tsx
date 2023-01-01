import BlogCard from "../components";
import { BlogDescriptionCard } from "../components/BlogCard";

export const Blog = () => {
  return (
    <div>
      <h1>blog</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <BlogCard arrayDetails={{ name: "ok", description: "descriptoin" }}>
          <BlogCard.Title />
          <BlogDescriptionCard />
        </BlogCard>
      </div>
    </div>
  );
};
