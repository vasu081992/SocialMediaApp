import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Post.css'
function Post() {
  return (
    <div className='post'> 
          <div className="postWrapper">
           <div className='postTop'>
              <div className="postTopLeft">
                <img src="/assets/person/1.jpeg" alt='pic' className='postUserPic'/>
                <span className="postUserName">Vasu Devan</span>
                <span className="postDate">5 mins ago</span>
              </div>
              <div className="postTopRight">
              <MoreVertIcon/>
              </div>
              </div>
          <div className='postCenter'></div>
          <div className='postBottom'></div>
          </div>
    </div>
  )
}

export default Post