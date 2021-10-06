import PropTypes from "prop-types";
import s from "./friendList.module.css";

function Friend({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline === true ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default Friend;
