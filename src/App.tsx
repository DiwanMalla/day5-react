import Home from "./Home";
import Message from "./Message";
import Navbar from "./navbar";
import Create from "./create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  const title = "Welcome to my project";
  const name = "Diwan Malla";
  let follower = 20;
  let following = 10;
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <h1 className="text-green-800 text-center">App Component</h1>
          <p className="text-center">{title}</p>
          <Message />
          <h2>{name}</h2>
          <p>
            <h4>
              <b className="bg-blue-200">Follower</b>: {follower}{" "}
              <b>Following</b>: {following}
            </h4>
          </p>
          <a href="https://www.google.com">Google</a>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <br></br>
              <p>
                <Create />
              </p>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
