import React, { Component } from "react";
import "./App.css";
import Coursesales from "./Coursesales";

class App extends Component {
  render() {
    var courses = [
      { name: "Complete javaScript", price: 200 },
      { name: "Complete React", price: 50 },
      { name: "Complete Node.Js", price: 90 },
      { name: "Complete Angular", price: 100 },
      { name: "Complete Vue", price: 120 }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <h2> start learning</h2>
          <Coursesales items={courses} />
        </div>
      </div>
    );
  }
}
export default App;
