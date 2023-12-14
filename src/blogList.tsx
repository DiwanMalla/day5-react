import { Link } from "react-router-dom";
interface Blog {
  // Define the structure of your Blog object
  // For example:
  id: number;
  title: string;
  content: string;
  // ... other properties
}
interface BlogListProps {
  blogs: Blog[]; // Assuming blogs is an array of Blog objects
  title: string;
}
function blogList({ blogs, title }: BlogListProps) {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog: any) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="text-red-500">{blog.title}</h2>
            <p>Written by: {blog.author}</p>
          </Link>

          <br />
        </div>
      ))}
    </div>
  );
}

export default blogList;
