import "./codingProfiles.scss";
import { codingProfiles } from "constants/codingProfile";


export default function CodingProfiles() {
  return (
    <div className="coding-profiles">
      <div className="profiles-grid">
        {codingProfiles.map((profile: any) => (
          <a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
          >
            <profile.icon />
            <div className="profile-info">
              <h3>{profile.name}</h3>
              <p>{profile.username}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}