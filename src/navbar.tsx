import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <>
      <nav className="">
        <h1>My Blog</h1>
        <div className="bg-green-400 flex gap-6">
          <Link to="/" className="bg-red-200 rounded-lg text-blue-400">
            Home
          </Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
    </>
  );
};

export default navbar;
