// import user from "./user.json"
import s from "./profile.module.css";
import PropTypes from "prop-types";

export function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.list}>
          <span className="label">Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};
