import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

import { timelineData } from '../data';

const WorkExperience: React.FC = () => {
  const timeLineData = timelineData;

  return (
    <>
      <div className="timeline-container">
        <p className="timeline-eyebrow">Experience</p>
        <h1 className="timeline-title">Systems, Infrastructure, and Operations Experience</h1>
        <p className="timeline-intro">
          Most of my experience has centered on keeping systems usable, improving reliability, and supporting the
          Windows and Linux infrastructure behind day-to-day operations.
        </p>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? { background: 'linear-gradient(180deg, rgba(32, 32, 32, 0.98), rgba(20, 20, 20, 0.98))', color: '#fff', border: '1px solid rgba(229, 9, 20, 0.18)', boxShadow: '0 12px 26px rgba(0, 0, 0, 0.22)' }
                : { background: 'linear-gradient(180deg, rgba(42, 24, 28, 0.98), rgba(30, 18, 22, 0.98))', color: '#fff', border: '1px solid rgba(229, 9, 20, 0.16)', boxShadow: '0 12px 26px rgba(0, 0, 0, 0.18)' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: '7px solid rgba(32, 32, 32, 0.98)' }
                : { borderRight: '7px solid rgba(42, 24, 28, 0.98)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(229, 9, 20)', color: '#fff' }
                : { background: 'rgb(143, 30, 43)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === 'work' ? (
              <div className="timeline-card-content">
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech"><strong>Focus Areas:</strong> {item.techStack}</p>
                <ul className="vertical-timeline-element-points">
                  {item.summaryPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="timeline-card-content">
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                {item.techStack && <p className="vertical-timeline-element-tech"><strong>Focus:</strong> {item.techStack}</p>}
                <ul className="vertical-timeline-element-points">
                  {item.summaryPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(229, 9, 20)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
