import React from 'react';
import axios from 'axios';
import EmployerList from './employer-list';

const EmployerContainer = React.createClass({

  getInitialState: function() {
    return {
      employers: []
    }
  },

  componentDidMount: function() {
    var _this = this;

    axios.get('../../Data/employers.json').then(result => {
      _this.setState({employers: result.data.employers});
    });
  },

  render: function() {
    return (
      <div className='container clearfix'>
        <EmployerList employers={this.state.employers} />
      </div>
    )
  }

});

export default EmployerContainer;
