import PropTypes from "prop-types";
import Friend from "./Friend";
import s from "./friendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
