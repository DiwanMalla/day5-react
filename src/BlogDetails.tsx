import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
interface Blogparams {
  id: string;
}
const BlogDetails = () => {
  const { id } = useParams<Blogparams>();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/blogs/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:3000/blogs/" + blog.id, {
      method: "Delete",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      {isPending && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2 className="text-2xl m-2" style={{ color: "#f1356d" }}>
            {blog.title}
          </h2>
          <p className="text-md m-2">Written by {blog.author}</p>
          <p className="m-2">{blog.body}</p>
          <button
            onClick={handleClick}
            className="text-white border border-0 p-2 rounded-lg cursor-pointer"
            style={{ background: "#f1356d" }}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
