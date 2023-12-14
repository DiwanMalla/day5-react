import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("Enter a Blog Title");
  const [body, setBody] = useState("Enter a Blog Body");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    setTimeout(() => {
      fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("New blog addded");
        setIsPending(false);
        history.push("/");
      });
    }, 1000);
  };
  return (
    <div className="max-w-[400px] m-0 mx-auto text-center">
      <h2 className="text-3xl mb-4" style={{ color: "#f1356d" }}>
        Add a New Blog
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="text-left block">Blog Title:</label>
        <input
          type="text"
          required
          className="bg-gray-300 w-full p-0.6 block border border-solid border-black box-border"
          value={title}
          onClick={() => {
            if (title == "Enter a Blog Title") {
              setTitle("");
            }
          }}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label className="text-left block">Blog Body:</label>
        <textarea
          required
          className="bg-gray-300 w-full p-0.6 block border border-solid border-black box-border"
          value={body}
          onClick={() => {
            if (body == "Enter a Blog Body") {
              setBody("");
            }
          }}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="text-left block">Blog Author:</label>
        <select
          className="bg-gray-300 w-full p-0.6 block border border-solid border-black box-border"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && (
          <button
            className="text-white border-0 rounded-md cursor-pointer m-3"
            style={{ background: "#f1356d" }}
          >
            Add Blog
          </button>
        )}
        {isPending && (
          <button
            className="text-white border-0 rounded-md cursor-pointer m-3"
            style={{ background: "#f1356d" }}
            disabled
          >
            Adding Blog...
          </button>
        )}
      </form>
      <p>
        {title}
        <br></br>
        {body}
        <br></br>
        {author}
      </p>
    </div>
  );
};

export default Create;
