import React from "react";

import Spotify from "spotify-web-api-js";

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand">
            <h2>Reactify</h2>
          </a>
          <form
            className="form-inline"
            onSubmit={this.props.onSubmit}
            aria-label="Search"
          >
          <input
            class="form-control mr-sm-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={e => this.props.search(e.target.value)}
            />
            <button class="btn btn-outline-primary" type="submit">
              Find Song
            </button>
          </form>
        </nav>

    )
  }
}
export default SearchBar;
