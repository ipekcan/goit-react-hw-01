import friendStyle from "./Friend.module.css";


const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li className={`${friendStyle.card}`}>
        <div key={id} className={`${friendStyle.div}`}>
            <img src={avatar} alt="Avatar" width="48" className={`${friendStyle.image}`}/>
            <p className={`${friendStyle.name}`}>{name}</p>
            <p className={`${isOnline?friendStyle.Online:friendStyle.Offline}`}>{isOnline?"Online":"Offline"}</p>
        </div>
        </li>
    );
};

export default FriendListItem;
