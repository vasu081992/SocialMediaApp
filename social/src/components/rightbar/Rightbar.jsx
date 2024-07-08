import React from 'react'
import './Rightbar.css'
import {Users} from '../../pages/dummyData.js'
import Online from '../online/Online.jsx'


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
             {Users.map((user)=>(
               <Online userinfo={user} key={user.id}/>
             ))}
              </ul>
       </div> 
    </div>
  )
}

export default Rightbar