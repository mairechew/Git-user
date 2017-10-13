import React from 'react';

//

class Searchform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchUser: '' };
    this.onSearch = props.onSearch;
  }



  render() {
    return (
      <div className="Search">
        <h3>Enter github</h3>
        <input
          onChange={(event) => {
            this.setState({ searchUser: event.target.value });
          }}
        />
        <button onClick={() => this.onSearch(this.state.searchUser)}>Search</button>
        <div />
      </div>
    );
  }
}

export default Searchform;
