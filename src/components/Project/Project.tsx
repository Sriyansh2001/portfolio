import ProjectCard from 'components/Common/ProjectCard'
import './project.scss';

const projectData = [
  {
    heading: "Chess",
    image: "/images/chess.png",
    description: "A full-featured chess game built with React, featuring board rendering, move validation. Players can compete against another person.",
    githubLink: "https://github.com/Sriyansh2001/Chess"
  },  
  {
    heading: "Url Shortener",
    image: "/images/urlShortner.png",
    description: "A full-featured url shortener built with React and Node.js, featuring URL validation, analytics tracking, and a clean UI.",
    githubLink: "https://github.com/Sriyansh2001/Url-shortener-frontend"
  },  
  {
    heading: "River Crossing Puzzle",
    image: "/images/riverCrossing.png",
    description: "A full-featured river crossing puzzle game built with React, featuring logical puzzle solving and interactive gameplay.",
    githubLink: "https://github.com/Sriyansh2001/RiverCrossingGame"
  },  
  {
    heading: "News App",
    image: "/images/newpaper.png",
    description: "A full-featured news application built with React, featuring real-time updates, category filtering, and a clean UI.",
    githubLink: "https://github.com/Sriyansh2001/NewsPaper"
  },   
]

export default function Project() {
  return (
    <div className='project-container'>
      {projectData.map((project, index) => (
        <ProjectCard key={index} heading={project.heading} image={project.image} githubLink={project.githubLink}>
          {project.description}
        </ProjectCard>
      ))}
    </div>
  )
}
