import React, { useEffect } from "react";
import "./header.scss";
import { formattedDateAndTime } from "Utilities/dateUtilities";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IconType } from "react-icons";
import { githubLink, linkedinLink } from "constants/constants";

export const SOCIAL_LINKS: { icon: IconType; url: string }[] = [
  {
    icon: FaLinkedin,
    url: linkedinLink,
  },
  {
    icon: FaGithub,
    url: githubLink,
  },
];

const Header: React.FC = () => {
  const [now, setNow] = React.useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  const IconClickHandler = (url: string) => {
    window.open(url, "_blank");
  }

  return (
    <div className="header-main">
      <div>Sriyansh's Portfolio</div>
      <div className="mid-box">{formattedDateAndTime(now)}</div>
      {/* Add music icon,  */}
      <div className="last-box">
        {SOCIAL_LINKS.map(({ icon, url }: any) => {
          const Icon = icon;
          return (
            <Icon
                className="social-icon"
              key={url}
              size={20}
              onClick={() => IconClickHandler(url)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
