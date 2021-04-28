import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,

    posts: []
  };

  componentDidMount() { 
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            {/* react needs a key to more efficiently optimize the code */}
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
