import React from "react";

// import "./styles.css";

class SearchBar extends React.Component {
  state = { term: "" };
  onChangeHandle = event => {
    this.setState({
      term: event.target.value
    });
  };
  formSubmitHandle = event => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onFormSubmit(this.state.term);
    // this.setState({
    //   term: event.target.value
    // });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.formSubmitHandle}>
          <div className="field">
            <div className="ui icon input">
              <input
                type="text"
                value={this.state.term}
                placeholder="Video Search:"
                onChange={this.onChangeHandle}
              />
              <i className="search icon" />
            </div>
            <h5>Video Search-Bar:{this.state.term}</h5>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
