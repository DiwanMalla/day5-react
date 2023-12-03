import React, { useState, useEffect } from "react";
import BlogList from "./blogList";
function Home() {
  let deleteid: any;
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome Program",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id: any) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    deleteid = id;
    setBlogs(newBlogs);
  };

  return (
    <div>
      <br></br>
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
      <br></br>

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author == "mario")}
        title={"Mario's blogs"}
      /> */}
    </div>
  );
}

export default Home;
