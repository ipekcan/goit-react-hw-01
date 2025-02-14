import styles from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats}) => {
    return (
    <div className={`${styles.profileCard}`}>
        <div>
          <img
            src={image}
            alt="{name} avatar"
          />
          <p className={`${styles.username}`}>{name}</p>
          <p className={`${styles.details}`}>@{tag}</p>
          <p className={`${styles.details}`}>{location}</p>
        </div>
      
        <ul className={`${styles.stats}`}>
          <li className={`${styles.stat}`}>
            <span>Followers</span>
            {stats.followers}
          </li>
          <li className={`${styles.stat}`}>
            <span>Views</span>
            {stats.views}
          </li>
          <li className={`${styles.stat}`}>
            <span>Likes</span>
            {stats.likes}
          </li>
        </ul> 
    </div>
      
    );
  };
  

export default Profile;
  