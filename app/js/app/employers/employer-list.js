import React from 'react';

export default function(props) {
  return(
    <div>
      { props.employers.map(function(employer) {

        return (
          <div className="employer col-xs-24 col-md-22 center-col" key={employer.companyName}>
            <h2 className="employer__company-name"><a href={employer.companyLink} target="_blank">{employer.companyName}</a></h2>
            <h6 className="employer__time-range">{employer.timeRange}</h6>
            <h4 className="employer__job-title">{employer.jobTitle}</h4>
            <div className="employer__summary" dangerouslySetInnerHTML={ {__html: employer.summary} }/>
          </div>
        );
      }) }
    </div>
  );
};
