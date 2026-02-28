import React from "react";
import Button from "./Button";
import "./projectCard.scss";

interface ProjectCardProps {
  heading: string;
  image: string;
  children?: React.ReactNode;
  githubLink?: string;
}

export default function ProjectCard({ heading, image, children, githubLink }: ProjectCardProps) {
  return (
    <div>
      <div className="card">
        <div className="content">
          <div className="top">
            <p>{heading}</p>
            <Button className="dark" variant="primary" onClick={() => window.open(githubLink, "_blank")}>Github Link</Button>
          </div>
          <div className="middle">
            <img src={image || ""} className="card-image" alt="project" />
          </div>
          <div className="bottom">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
