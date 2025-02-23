import style from './friendlist.module.css';
import FriendListItem from './friendlistitem.jsx';

export default function FriendList({ friends }) {
  return (
    <ul className={style.friendlist}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
