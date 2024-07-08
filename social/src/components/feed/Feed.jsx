import React from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import {Posts} from '../../pages/dummyData.js'

function feed() {
 
  return (
    <div className='feed'>
     <div className="feedWrapper">
        <Share/>
        {Posts.map((item)=>(
          <Post key={item.id} post={item}/>
        ))}
     </div>
    </div>
  )
}

export default feed