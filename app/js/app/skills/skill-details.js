import React from 'react';

const SkillDetails = React.createClass({

  render: function() {
    let styleYears = { width: 0, backgroundColor: '#575757' };
    let styleKnowledge = { width: 0, backgroundColor: '#575757' };
    let knowledgeLevel = "Beginner";
    let skill = { years: 0 };

    if(this.props.skills.length > 0) {

      // Calculated the width of the skill bar
      skill = this.props.skills[this.props.currentSkill];
      let width = (skill.years / 5) * 100;

      // Don't let width overflow the container
      width = (width > 100) ? 100 : width;

      // Set bar widths
      styleYears.width = width + '%';
      styleKnowledge.width = skill.level * 10 + '%';

      styleYears.backgroundColor = skill.fill;
      styleKnowledge.backgroundColor = skill.fill;

      // Get knowledge level text
      knowledgeLevel = this.getKnowledgeLevel(skill);
    }


    return(
      <div className="skills-info container container--small">
        <div className="skills-info__property">
          <h5 className="skills-info__label">Years Experience </h5>
          <div className="skills-info__legend"></div>
          <div className="skills-info__bar">
            <div style={styleYears} className="skills-info__bar__fill">{ skill.years} years</div>
          </div>
        </div>
        <div className="skills-info__property">
          <h5 className="skills-info__label">Knowledge Level</h5>
          <div className="skills-info__legend"></div>
          <div className="skills-info__bar">
            <div style={styleKnowledge} className="skills-info__bar__fill">{ knowledgeLevel }</div>
          </div>
        </div>
      </div>
    );
  },

  getKnowledgeLevel: function(skillObject){

    if(skillObject.level <= 2) {
      return "Little";
    }
    else if(skillObject.level <= 4 && skillObject.level > 2) {
      return "Familiar";
    }
    else if(skillObject.level <= 6 && skillObject.level > 4) {
      return "Proficient";
    }
    else if(skillObject.level <= 8 && skillObject.level > 6) {
      return "Expert";
    }
    else {
      return "Master";
    }
  }
});

module.exports = SkillDetails;
