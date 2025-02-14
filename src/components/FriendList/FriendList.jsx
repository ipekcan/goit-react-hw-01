import flStyles from "./FriendList.module.css";
import friends from "../../friends.json";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
 
const FriendList = ({ friends }) => {
    return (
    <ul className={`${flStyles.list}`}>
      {friends.friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};


export default FriendList;