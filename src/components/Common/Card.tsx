import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  const classes = className ? `${className} card` : "card";

  return (
    <article className={classes}>
      <header className="card-header">
        <div className="header-accent" />
        <h3>{title}</h3>
      </header>

      <div className="card-body">{children}</div>
    </article>
  );
};

export default Card;
