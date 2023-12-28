import { Link } from 'react-router-dom';
import './online.css'

const Online = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER_URL;
  return (
    <div>
      <Link to={"/profile/"+user.username} style={{textDecoration:"none", color:"black"}}  >
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="righbarUsername">{user.username}</span>
        </li>
      </Link>
    </div>
  )
}

export default Online
