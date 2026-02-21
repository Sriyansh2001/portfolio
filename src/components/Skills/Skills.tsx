import React from "react";
import "./skills.scss";
import Card from "components/Common/Card";

const data = {
  "Programming Languages": ["C++", "Java", "Python", "JavaScript"],
  Frontend: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  "Backend & APIs": ["Node.js", "Express.js", "REST APIs"],
  "Cloud & AWS": ["AWS Lambda", "Amazon S3", "Amazon SQS", "AWS CDK"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "DynamoDB"],
  "Core Computer Science": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Database Management Systems",
  ],
  "Tools & Technologies": ["Git & GitHub"],
};

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <div className="skills-grid">
        {Object.entries(data).map(([category, items]) => (
          <Card className="skills-card" key={category} title={category}>
            {(items as string[]).map((item) => (
              <span className="skill-pill" key={item}>
                {item}
              </span>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
