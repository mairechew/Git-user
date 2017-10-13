import React from 'react';

//

class Searchform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.onSearch = props.onSearch;
  }

  render() {
    return (
      <div className="Search">
        <h3>Enter github</h3>
        <input
          onChange={e => {
            this.setState({ username: e.target.value });
          }}
        />
        <button onClick={e => this.onSearch(this.state.username)}>Search</button>
        <div />
      </div>
    );
  }
}

export default Searchform;
