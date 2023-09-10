import "./online.css"

export default function Online({user}) {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImageContainer">
          <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <div className="rightbarUsername">{user.username}</div>
      </li>
    </div>
  )
}
