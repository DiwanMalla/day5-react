const navbar = () => {
  return (
    <>
      <nav className="">
        <h1>My Blog</h1>
        <div className="bg-green-400 flex gap-6">
          <a href="/" className="bg-red-200 rounded-lg text-blue-400">
            Home
          </a>
          <a href="/create">New Blog</a>
        </div>
      </nav>
    </>
  );
};

export default navbar;
