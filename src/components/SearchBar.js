import React from "react";

class SearchBar extends React.Component {
  // Either use this.prop = this.prop.bind(this.prop) or use arrow function to solve context issues
  state = { term: "" };

  onFormSubmit = (event) => {
    // Prevent default browser
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
