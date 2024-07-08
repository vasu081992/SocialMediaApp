import React from 'react'
import './Profile.css'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar  from '../../components/rightbar/Rightbar'

function Profile() {
  return (
    <>
    <Topbar/>
    {/* <div className="homeContainer"> */}
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
          <img src="assets/posts/3.jpeg" alt="" className="profileCoverImage" />
          <img src="assets/posts/7.jpeg" alt="" className="profileUserImage" />
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>VasuDevan</h4>
            <p className='profileInfoDescription'> Hello Friends! Welcome to my personal FB Profile !</p>
          </div>
          </div>
        <div className="profileRightBottom">
      <Feed/>
      <Rightbar profile/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Profile