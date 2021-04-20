import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "i am greeting you for the 1st time",
        body: "Body 1",
      },
      {
        id: 2,
        title: "i am greeting you for the 2st time",
        body: "Body 2",
      },
      {
        id: 3,
        title: "i am greeting you for the 3st time",
        body: "Body 3",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
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
