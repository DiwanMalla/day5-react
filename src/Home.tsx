import BlogList from "./blogList";
import useFetch from "./useFetch";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/blogs");

  return (
    <div>
      <br></br>
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {data && <BlogList blogs={data} title={"All Blogs"} />}
      {/* <br></br>
      <button onClick={() => setName("luigi")}>Change name</button>
      <p>{name}</p> */}
      {/* 
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"Mario's blogs"}
      />
      */}
    </div>
  );
}

export default Home;
