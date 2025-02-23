import style from './friendlist.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={style.friendcard}>
      <img
        className={style.friendimg}
        src={avatar}
        width="80"
        alt={`${name}'s avatar`}
      />
      <p className={style.friendname}>{name}</p>
      <p
        className={`${style.friendstatus} ${
          isOnline ? style.online : style.offline
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
