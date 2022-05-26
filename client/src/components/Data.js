import React, { Component } from "react";

class Data extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("/data")
      .then(res => res.json())
      .then(data =>
        this.setState({ data }, () => console.log("Customers fetched...", data))
      );
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.data.map(d => (
            <li key={d.id}>{d.message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Data;
