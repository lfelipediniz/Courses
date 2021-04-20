import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,

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

  timeoutUpdate = null;

  componentDidMount() { /* when the component was assembled on the ´page, this 
  function is triggered */ this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout(); // for the page to always update
  }

  componentWillUnmount() {

    clearTimeout(this.timeoutUpdate); /* cleaning the garbage that remains with the 
    looping */
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;

    posts[0].title = "The title has changed";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 2 });
    }, 2000); // the content of the page will change after 2 seconds
  };

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
