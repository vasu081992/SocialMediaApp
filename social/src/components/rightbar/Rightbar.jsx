import React from 'react'
import './Rightbar.css'
import {Users} from '../../pages/dummyData.js'
import Online from '../online/Online.jsx'


const HomeRightBar = ()=>{
  return ( 
    <>
    <div className="birthDayContainer">
            <img className="birthdayImage" src="assets/posts/gift.png" alt="birthday icon" />
            <span className="birthdayText"> <b>Vineela </b>and <b>3 other friends have birthday Today ! </b> </span>
            </div>
            <img src="assets/posts/ad.png" alt="advertisement" className="rightbarAD" />
            <h4 className="rightbarTitle"> Online Friends </h4>
            <ul className="rightBarFriendList">
             {Users.map((user)=>(
               <Online userinfo={user} key={user.id}/>
             ))}
              </ul> 
    </>
  )
}

const ProfileRightBar = () =>{
 
  return (
    <>
    <h4 className="rightbarTitle">User information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Madrid</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img
          src="assets/person/1.jpeg"
          alt=""
          className="rightbarFollowingImg"
        />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img
          src="assets/person/2.jpeg"
          alt=""
          className="rightbarFollowingImg"
        />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img
          src="assets/person/3.jpeg"
          alt=""
          className="rightbarFollowingImg"
        />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img
          src="assets/person/4.jpeg"
          alt=""
          className="rightbarFollowingImg"
        />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img
          src="assets/person/5.jpeg"
          alt=""
          className="rightbarFollowingImg"
        />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img
          src="assets/person/6.jpeg"
          alt=""
          className="rightbarFollowingImg"
        />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
    </div>
  </>
  )


}
function Rightbar({profile}) {
  return (

    <div className='rightbar'>
        <div className="rightBarWrapper"> 
        {profile? <ProfileRightBar/> :<HomeRightBar/>}
       </div> 
    </div>
  )
}

export default Rightbar