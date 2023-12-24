import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assests/gift.png" alt="" />
          <span className="birthdayText"><b>John doe</b> and <b>3 other friends </b> have birthday today</span>
        </div>
        <img className='rightbarAd' src="/assests/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }


  const ProfilePageRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle' >User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Cith: </span>
            <span className="rightbarInfoValue">New York </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Madrid </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single </span>
          </div>
        </div>
        <h4 className='rightbarTitle' >User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assests/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assests/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assests/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile?<ProfilePageRightbar/>:<HomeRightBar/>}
      </div>
    </div>
  )
}

export default Rightbar
