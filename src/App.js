import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

export class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <Header />;
  }
}
