import React from 'react'
import './Online.css'

function Online({userinfo}) {
  return (
<li className="rightBarFriend">
                <div className="rightBarProfileImageContainer">
                   <img src={userinfo.profilePicture} alt="" className="rightBarProfileImage" />
                   <span className='rightBarOnline'></span>
                </div>
                   <span className="rightBarUserName">{userinfo.username}</span>
</li>
  )
}

export default Online