import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Post.css'
import {Users} from '../../pages/dummyData.js'
import { useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import LikeIcon from '../LikeIcon/LikeIcon.jsx';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function Post({post}) {

  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false)

const handleLike = ()=>{

  if(!isLiked){
  setLike((prev)=>prev+1)
  setIsLiked(!isLiked)
  }
  else{
    setLike(post.like)
    setIsLiked(!isLiked)
  }

}
  console.log("posts via props",post)
  return (
    <div className='post'> 
          <div className="postWrapper">
           <div className='postTop'>
              <div className="postTopLeft">
                <img src={Users.filter((user)=> user.id===post.id)[0].profilePicture} alt='pic' className='postUserPic'/>
                <span className="postUserName">{Users.filter((user)=> user.id===post.id)[0].username}</span>
                <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
              <MoreVertIcon/>
              </div>
              </div>
          <div className='postCenter'>
             <span className='postText'>{post?.desc}</span>
             <img src={post?.photo} className='postImage' alt="railway station" />
          </div>
          <div className='postBottom'>
            <div className="postBottomLeft">
               {/* <img className='likeButton' src={<ThumbUpOffAltIcon/>} alt="heart"onClick={handleLike} />
               <img className='likeButton' src="assets/posts/like.png" alt="heart" onClick={handleLike} /> */}
               {isLiked?<ThumbUpAltIcon className='likeButtonLiked' onClick={handleLike}/> : <ThumbUpOffAltIcon className='likeButton' onClick={handleLike}/> }
               <span className="postlikeCounter">{like} people like it !</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post?.comments} comments</span>

            </div>
          </div>
          </div>
    </div>
  )
}

export default Post