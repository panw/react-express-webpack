import React from 'react'
import { render, findDOMNode } from 'react-dom'
import { Router, Route, Link, History } from 'react-router'
import { createHistory, useBasename } from 'history'

const history = createHistory();

const App = React.createClass({  
  render() {
    return (
      <div>
        <span>I am the router</span>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

var About = React.createClass({
  render() {
    return <h1>About</h1>
  }
});

// export default class About extends React.Component {
//   render() {
//     return (
//       <h1>Hello World</h1>
//     );
//   }
// };

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('app-container'));