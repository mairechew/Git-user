import React from 'react';

//component did mount

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: props.username };
  }

  render() {
    return (
      <div className="Card">
        <h3> {this.state.username}</h3>
      </div>
    );
  }
}

export default Card;
