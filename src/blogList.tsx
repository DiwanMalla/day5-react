import React from "react";

function blogList({ blogs, title, handleDelete }) {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog: any) => (
        <div key={blog.id}>
          <h2 className="text-red-500">{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <button
            onClick={() => handleDelete(blog.id)}
            className="bg-black text-white"
          >
            Delete blog
          </button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default blogList;
