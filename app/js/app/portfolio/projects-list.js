import React from 'react';
import { Link } from 'react-router';

const Projects = React.createClass({
  render: function() {
    return (
      <div className={ this.props.fullDetails ? 'portfolio' : 'portfolio--links' }>
        { this.props.fullDetails ? this.props.projects.map(this.projectDetailsDisplay) : this.props.projects.map(this.projectLinkDisplay) }
      </div>
    );
  },

  projectDetailsDisplay: function(project) {
    return (
      <div className="portfolio__project" key={project.id}>
        <div className="project">
          <div className="project__image">
            <Link to={project.url} target="_blank"><img src={ '/img/portfolio/' + project.image }  alt={project.name + ' website mockups'}/></Link>
          </div>
          <h4 className="project__date">{project.dateRange}</h4>
          <Link to={project.url} target="_blank"><h2 className="project__title">{project.name}</h2></Link>
          <h4 className="project__subtitle">{project.subtitle}</h4>
          <div className="project__description">{project.description}</div>
        </div>
      </div>
    );
  },

  projectLinkDisplay: function(project) {
    return (
      <div className="project--link" key={project.id}>
        <div className="project__image--logo">
          <img src={ '/img/portfolio/' + project.logo }  alt={project.name + ' project link'}/>
        </div>
      </div>
    );
  }
});

module.exports = Projects;
