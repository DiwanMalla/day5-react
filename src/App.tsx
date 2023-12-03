import Home from "./Home";
import Message from "./Message";
import Navbar from "./navbar";
function App() {
  const title = "Welcome to my project";
  const name = "Diwan Malla";
  let follower = 20;
  let following = 10;
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1 className="text-green-800 text-center">App Component</h1>
      </div>

      <p className="text-center">{title}</p>
      <Message />
      <h2>{name}</h2>
      <p>
        <h4>
          <b className="bg-blue-200">Follower</b>: {follower} <b>Following</b>:{" "}
          {following}
        </h4>
      </p>
      <a href="https://www.google.com">Google</a>
      <Home />
    </div>
  );
}

export default App;
