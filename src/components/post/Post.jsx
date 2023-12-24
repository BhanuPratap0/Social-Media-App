import { MoreVert } from '@mui/icons-material'
import './post.css'
import {Users} from '../../dummyData'
import { useState } from 'react'

const Post = ({post}) => {
    const [like, setLike] = useState(post.like);
    const [isLike, setIsLike] = useState(false);

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
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assests/like.png" alt="" className="likeIcon" onClick={handleLike} />
                        <img src="/assests/heart.png" alt="" className="likeIcon" onClick={handleLike} />
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
