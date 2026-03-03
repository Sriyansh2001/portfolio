import React from 'react';
import './experience.scss';

interface ExperienceItem {
  position: string;
  company: string;
  duration: string;
  achievements: string[];
}

const experienceData: ExperienceItem[] = [
  {
    position: 'SDE-1',
    company: 'Amazon',
    duration: 'Feb 2024 – Present',
    achievements: [
      'Designed and deployed serverless applications using AWS Lambda, SQS, and AWS CDK, improving scalability and reducing operational overhead',
      'Implemented secure and cost-efficient object storage with Amazon S3, enabling reliable file retrieval for millions of requests.'
    ]
  },
  {
    position: 'Junior Associate Software Engineer',
    company: 'Unthinkable Solutions',
    duration: 'Feb 2024 – Present',
    achievements: [
      'Developed dynamic and responsive user interfaces using ReactJS and implemented complex state management solutions using Redux.',
      'Architected and integrated highly optimized server-side rendered (SSR) applications using Next.js, implementing dynamic data fetching, SEO best practices, code splitting, and caching strategies to enhance performance and scalability',
      'Optimized the application login page, reducing its load size from 19MB to 6MB, improving performance and user experience.',
      'Integrated Google Maps API for enhanced user interaction and location-based features.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="timeline-dot" />
            <div className="experience-content">
              <div className="experience-header">
                <div className="position-company">
                  <h3 className="position">{exp.position}</h3>
                  <h4 className="company">{exp.company}</h4>
                </div>
                <span className="duration">{exp.duration}</span>
              </div>
              <ul className="achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
