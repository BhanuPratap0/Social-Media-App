import { MoreVert } from '@mui/icons-material'
import './post.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'

const Post = ({post}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER_URL;
    const [like, setLike] = useState(post.likes.length);
    const [isLike, setIsLike] = useState(false);
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async() =>{
          const res = await axios.get(`user/${post.userId}`);
          setUser(res.data);
        };
        fetchUser();
      },[post.userId])

    

    const handleLike = () => {
        setLike(isLike ? like-1 : like + 1)
        setIsLike(!isLike);
    }

    console.log(post)
    return (
        <div className='post' >
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture || PF+"person/avatar.jpeg"} alt="" className="postProfileImg" />
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={handleLike} />
                        <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={handleLike} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
