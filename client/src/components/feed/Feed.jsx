import './feed.css'
import Share from "../share/Share"
import { useEffect, useState } from 'react'
import axios from 'axios';
import Post from '../post/Post'


const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async() =>{
      const res = await axios.get("post/timeline/6583c0dfa79ff49efb4cb130");
      setPosts(res.data);
    };
    fetchPost();
  },[])

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
        
      </div>
    </div>
  )
}

export default Feed
