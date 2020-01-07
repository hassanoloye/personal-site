import React from "react"
import TimelineItem from "./TimelineItem"
import Resume from "../../resume.json"

function Timeline() {
  const years = [];
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">{new Date().getFullYear()}</span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {

        Resume.work.map((item) => {
          return (item.endDate ? new Date(item.endDate).getFullYear() : new Date().getFullYear())
        }).map((year, yearIndex) => {
          let content = []

          if (!years.includes(year)) {
            years.push(year)
            content.push(<header key={yearIndex} className="timeline-header">
              <span className="tag is-success">{year}</span>
            </header>)
            content.push(Resume.work.filter(work => (work.endDate ? new Date(work.endDate).getFullYear() : new Date().getFullYear()) === year).map((item, index) => {
              return <TimelineItem
                key={index}
                start_date={new Date(item.startDate).toLocaleString('en-UK', {month: 'long', year: 'numeric'})}
                end_date={item.endDate ? new Date(item.endDate).toLocaleString('en-UK', {
                  month: 'long',
                  year: 'numeric'
                }) : ''}
                company={item.company}
                summary={item.summary}
                website={item.website}
              />
            }))
          }
          return content
        })
      }
    </div>
  )
}

export default Timeline
