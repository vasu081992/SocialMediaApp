import React from 'react'
import './Topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function Topbar() {
  return (
    <div className='topbar-container'>
      <div className="topbarLeft">
        <span className="logo">India Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <SearchIcon className='search-icon'/>
        <input  placeholder="Search for friends, post or a video!" type="text" className="searchinput" />
        </div> 
    </div>
    <div className="topbarRight">
    <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
    </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <PersonIcon/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <ChatIcon/>
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <CircleNotificationsIcon/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="profile-pic" className="topbarImage" />
    </div>
    </div>
  )
}

export default Topbar