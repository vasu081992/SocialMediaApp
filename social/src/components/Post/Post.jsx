import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Post.css'



function Post({post}) {

  console.log("posts via props",post)
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
          <div className='postCenter'>
             <span className='postText'>Hey ! Its my first post</span>
             <img src="assets/posts/1.jpeg" className='postImage' alt="railway station" />
          </div>
          <div className='postBottom'>
            <div className="postBottomLeft">
               <img className='likeButton' src="assets/posts/heart.png" alt="heart" />
               <img className='likeButton' src="assets/posts/like.png" alt="heart" />
               <span className="postlikeCounter">32 people like it !</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>

            </div>
          </div>
          </div>
    </div>
  )
}

export default Post