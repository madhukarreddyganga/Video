import React, { Component } from "react";

import SearchBar from "./searchBar";
import api from "./api";
import VideoItem from "./videos";


class App extends Component {
  constructor() {
    super();
    this.state = { videos: [] };
  }
  submitHandler = term => {
    api
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(response => {
        this.setState({ videos: response.data.items });
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  };

  render() {
    return (
      <div className="ui segment">
        <SearchBar onFormSubmit={this.submitHandler} />
        <h5>I have :{this.state.videos}</h5>
        <VideoItem video={this.state.videos} />
      </div>
    );
  }
}

export default App;
