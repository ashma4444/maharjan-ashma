import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  const timeline = [
    {
      contentStyle: { background: "#2c98f0", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  #2c98f0" },
      date: "March 2023 - Present",
      icon: <FontAwesomeIcon icon={faPencil} />,
      iconClass: "icon1",
      title: "Web Developer",
      subtitle: "Beam Lab",
      text: "Frontend Development (Vue JS), API Integration, Collaboration, State Management, Debugging and Troubleshooting, Version Control",
    },
    {
      contentStyle: { background: "#fbc630", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  #fbc630" },
      date: "November 2022 - February 2023",
      icon: <FontAwesomeIcon icon={faPencil} />,
      iconClass: "icon2",
      title: "Teaching Assistant",
      subtitle: "Islington College",
      text: "Frontend Development (Django), Collaboration and Communication, Student Assistance, Classroom Support",
    },
    {
      contentStyle: { background: "#a84cb8", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  #a84cb8" },
      date: "July 2022 - November 2022",
      icon: <FontAwesomeIcon icon={faPencil} />,
      iconClass: "icon3",
      title: "Frontend Developer",
      subtitle: "Eagle Vision IT",
      text: "Frontend Development (Wordpress), PHP, MySQL, Event Handling, Documentation, Optimization and Performance",
    },
  ];
  return (
    <>
      <div className="experience">
        <h3 className="secondary-heading">Experience</h3>
        <h1 className="primary-heading">Work Experience</h1>

        <VerticalTimeline lineColor="rgba(0, 0, 0, 0.7)">
          {timeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={item.contentStyle}
              contentArrowStyle={item.contentArrowStyle}
              date={item.date}
              dateClassName="date-text"
              icon={item.icon}
              iconClassName={item.iconClass}
            >
              <h5 className="vertical-timeline-element-title">{item.title}</h5>
              <h6 className="vertical-timeline-element-subtitle">
                {item.subtitle}
              </h6>
              <p style={{ fontWeight: "400" }}>{item.text}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;
