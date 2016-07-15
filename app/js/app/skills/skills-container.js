import React from 'react';
import axios from 'axios';

import SkillsDisplay from './skills-display';
import SkillDetails from './skill-details';

const SkillsContainer = React.createClass({

  getInitialState: function() {
    return {
      skills: [],
      currentSkill: 0
    }
  },

  componentDidMount: function() {
    var _this = this;

    axios.get('../../Data/skills.json').then(result => {
      _this.setState({skills: result.data.skills, currentSkill: 0});
    });

    window.onkeyup = this.handleKeyUp;
  },

  nextSkill: function() {
    let newCurrent = (this.state.currentSkill == this.state.skills.length - 1) ? 0 : this.state.currentSkill + 1;
    this.setState({currentSkill: newCurrent});
  },

  previousSkill: function() {
    let newCurrent = (this.state.currentSkill == 0) ? this.state.skills.length - 1 : this.state.currentSkill - 1;
    this.setState({currentSkill: newCurrent});
  },

  onItemClick: function(itemIndex) {
    this.setState({currentSkill: itemIndex});
  },

  handleKeyUp: function(e) {

    if(e.keyCode == 39) {
      this.nextSkill();
    }
    if(e.keyCode == 37) {
      this.previousSkill();
    }
  },

  handleTouchEnd: function(e) {

    console.dir("Touch Event: " + e);
    if(e.keyCode == 39) {
      this.nextSkill();
    }
    if(e.keyCode == 37) {
      this.previousSkill();
    }
  },

  render: function() {
    return (
      <div className="skills container">
        <SkillsDisplay skills={this.state.skills} currentSkill={this.state.currentSkill} nextSkill={this.nextSkill} previousSkill={this.previousSkill} onItemClick={this.onItemClick} handleTouchEnd={this.handleTouchEnd}/>
        <SkillDetails skills={this.state.skills} currentSkill={this.state.currentSkill} />
      </div>
    )
  }

});

module.exports = SkillsContainer;
