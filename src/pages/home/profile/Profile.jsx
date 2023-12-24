import Feed from '../../../components/feed/Feed'
import Rightbar from '../../../components/rightbar/Rightbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Topbar from '../../../components/topbar/Topbar'
import './profile.css'


const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assests/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="assests/post/7.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName' >Bunny Boi</h4>
                            <span className='profileInfoDesc' >Hello friends from Bunn Boi</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
