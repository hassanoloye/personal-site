import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt=""/>
      </div>
      <div className="timeline-content">
        <p className="heading">{props.start_date} - {props.end_date || 'Date' }</p>
        {props.website ?
          <a className="title is-4" href={props.website}>{props.company} </a> :
                    <h1 className="title is-4">{props.company}</h1> }
        <p style={{maxWidth: '25em', textAlign: 'left'}}>
          {props.summary.split('\n').map((summary) => {
            return <span> {summary} <br/><br/></span>
          })
          }</p>
      </div>
    </div>
  );
}

export default TimelineItem
