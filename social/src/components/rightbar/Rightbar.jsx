import React from 'react'
import './Rightbar.css'


function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightBarWrapper"> 
            <div className="birthDayContainer">
            <img className="birthdayImage" src="assets/posts/gift.png" alt="birthday icon" />
            <span className="birthdayText"> <b>Vineela </b>and <b>3 other friends have birthday Today ! </b> </span>
            </div>
            <img src="assets/posts/ad.png" alt="advertisement" className="rightbarAD" />
            <h4 className="rightbarTitle"> Online Friends </h4>
            <ul className="rightBarFriendList">
             <li className="rightBarFriend">
                <div className="rightBarProfileImageContainer">
                   <img src="assets/person/3.jpeg" alt="" className="rightBarProfileImage" />
                   <span className='rightBarOnline'></span>
                </div>
                   <span className="rightBarUserName">Johny Depp</span>
              </li>
              <li className="rightBarFriend">
                <div className="rightBarProfileImageContainer">
                   <img src="assets/person/3.jpeg" alt="" className="rightBarProfileImage" />
                   <span className='rightBarOnline'></span>
                </div>
                   <span className="rightBarUserName">Johny Depp</span>
              </li>
              <li className="rightBarFriend">
                <div className="rightBarProfileImageContainer">
                   <img src="assets/person/3.jpeg" alt="" className="rightBarProfileImage" />
                   <span className='rightBarOnline'></span>
                </div>
                   <span className="rightBarUserName">Johny Depp</span>
              </li>
              <li className="rightBarFriend">
                <div className="rightBarProfileImageContainer">
                   <img src="assets/person/3.jpeg" alt="" className="rightBarProfileImage" />
                   <span className='rightBarOnline'></span>
                </div>
                   <span className="rightBarUserName">Johny Depp</span>
              </li>
              <li className="rightBarFriend">
                <div className="rightBarProfileImageContainer">
                   <img src="assets/person/3.jpeg" alt="" className="rightBarProfileImage" />
                   <span className='rightBarOnline'></span>
                </div>
                   <span className="rightBarUserName">Johny Depp</span>
              </li>
              <li className="rightBarFriend">
                <div className="rightBarProfileImageContainer">
                   <img src="assets/person/3.jpeg" alt="" className="rightBarProfileImage" />
                   <span className='rightBarOnline'></span>
                </div>
                   <span className="rightBarUserName">Johny Depp</span>
              </li>
              </ul>
       </div> 
    </div>
  )
}

export default Rightbar