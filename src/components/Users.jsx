import React, { Component } from "react";

function searchingFor(term) {
  return function(x) {
    return x.name.includes(term) || !term;
  };
}

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { term } = this.state;
    const { users } = this.props;
    return (
      <div>
        <table class="container">
          <tr>
            <td class="search">
              <form>
                <input
                  type="text"
                  class="search-input"
                  onChange={this.searchHandler}
                  placeholder="search..."
                  value={term}
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <h5 class="heading">List of Names</h5>
            </td>
          </tr>
          <tr>
            <td>
              <table class="data">
                {users.filter(searchingFor(term)).map(user => (
                  <tr>
                    <td>{user.name}</td>
                  </tr>
                ))}
              </table>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Users;
