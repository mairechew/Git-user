import React from 'react';

//component did mount

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log()
// keeps local state
    this.state = { user: {},
                   username: props.username,
                   message: 'Ready, enter username' };
  }

  //used to make AJAX calls and set state
    componentDidMount() {
      if (this.state.username && this.state.username.length >= 3) {
        fetch('https://api.github.com/users/' + this.state.username)
        // get data from AJAX call & make JSON object
          .then(res => res.json())
        // set state to data from AJAX call
          .then(user => this.setState({...this.state, user: user})) //this = card component
          .catch( err => {
            this.setState({...this.state, message: err.message})
          })
      }   else {
            this.setState({...this.state, message: 'Ready, enter username'})
      }
    }

  render() {
    // initial message
    if (this.state.message) {
      return <div className="statusMessage">{this.state.message}></div>
    }
    return (
      <div className="Card">
        <img src={this.state.user.avatar_url}/>
        <h3> {this.state.user.name}</h3>
      </div>
    );
  }
}

export default Card;
