import React from "react";
import ReactDOM from "react-dom";

var Hello = React.createClass({
  getInitialState: function() {
    return {
      users: []
    }
  },

  render: function() {
    return (
      <ul className="user-list">
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    )
  }
})

const app = document.getElementById('root');
ReactDOM.render(<Hello />, app);
