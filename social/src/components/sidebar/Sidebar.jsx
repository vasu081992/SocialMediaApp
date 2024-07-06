import React from 'react'
import './Sidebar.css'
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper"></div>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <FeedIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <ChatIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
          <VideocamIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <GroupsIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <BookmarksIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
          <QuestionMarkIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
          <WorkIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
          <EventIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
          <SchoolIcon className='sidebarIcon'/>
          <span className="sidebarListItemText">Courses</span>
          </li>
          <button className="sidebarButton">Show More</button>
          <hr className='sidebarhr'/>
          <ul className="sidebarFriendList">
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt=""/>
              <span className='sidebarFriendName'> John Doe</span>
            </li>
          </ul>
        </ul>
      </div>
  )
}

export default Sidebar