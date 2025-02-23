import style from './friendlist.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={style.friendlist}>
      {friends.map(friend => (
        <li className={style.friendcard} key={friend.id}>
          <img className={style.friendimg} src={friend.avatar} width="80" />
          <p className={style.friendname}>{friend.name}</p>
          <p
            className={`${style.friendstatus} ${
              friend.isOnline ? style.online : style.offline
            }`}
          >
            {friend.isOnline ? 'Online' : 'Offline'}
          </p>
        </li>
      ))}
    </ul>
  );
}
