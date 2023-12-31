import './feed.css'
import Share from "../share/Share"
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Post from '../post/Post'
import { AuthContext } from '../../context/AuthContext';


const Feed = ({username}) => {

  const [posts, setPosts] = useState([]);
  const {user, postChange} = useContext(AuthContext);
  useEffect(() => {
    const fetchPost = async() =>{
      const res = username
      ? await axios.get("https://social-media-gfgj.onrender.com/api/post/profile/" + username)
      : await axios.get("https://social-media-gfgj.onrender.com/api/post/timeline/" + user._id);
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));
    };
    fetchPost();
  },[username, user._id, postChange])

  return (
    <div className='feed'>
      <div className="feedWrapper">
        { ( !username || username===user.username) && <Share/>}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
        
      </div>
    </div>
  )
}

export default Feed
