import React, { Component } from "react";
import axios from "axios";
import "./App.css";
class App extends Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.fetchAdvice();
  }
  //Create a method to fetchAPI (advice)
  fetchAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
        console.log(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1>
            Awesome Advice{" "}
            <span role="img" aria-label="emoji-laugh">
              😂
            </span>
          </h1>
          <h1 className="heading">{advice}</h1>
          <button
            className="button"
            onClick={() => {
              this.fetchAdvice();
            }}
          >
            <span>Give Me an Advice !</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
