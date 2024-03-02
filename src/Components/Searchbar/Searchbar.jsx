import React, { Component } from "react";

export default class Searchbar extends Component {
  state = { picQuery: "" };

  queryFormChange = ({ target: { value } }) => {
    this.setState({ picQuery: value });
  };
  queryFormSubmit = (e) => {
    e.preventDefault();

    this.props.addNewQuery(this.state.picQuery);
  };
  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.queryFormSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.queryFormChange}
              value={this.state.picQuery}
            />
          </form>
        </header>
      </>
    );
  }
}
