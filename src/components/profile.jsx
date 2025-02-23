import style from './profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div>
      <div className={style.card}>
        <img className={style.avatar} src={image}></img>
        <p className={style.username}>{name}</p>
        <p className={style.nickname}>@{tag}</p>
        <p className={style.location}>{location}</p>
        <ul className={style.stats}>
          <li className={style.statsitem}>
            <p className={style.statsname}>Followers</p>
            <p className={style.number}>{stats.followers}</p>
          </li>
          <li className={style.statsitem}>
            <p className={style.statsname}>Views</p>
            <p className={style.number}>{stats.views}</p>
          </li>
          <li className={style.statsitem}>
            <p className={style.statsname}>Likes </p>
            <p className={style.number}>{stats.likes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
