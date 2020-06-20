import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.setState({
      clicks: 0,
    });
  }


  handleClick() {
    console.log("clicked");
    this.setState((state,props) => ({
      clicks: state.clicks + 1,
    }));
  }

  render() {
    return(
      <div>
      <h1 class="welcome_message">Hello welcome to Dev's MAGNIFICANT counter...</h1>
      <button onClick={this.handleClick} class="button"> Click </button>
      {this.state.clicks > 0 && 
        <h2>Wonderful! You have clicks</h2>
      }
      <h2>{this.state.clicks}</h2>
      </div>
    ) 
  }

}


ReactDOM.render( 
  <Clicker />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
