import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar  from '../../components/rightbar/Rightbar'
import './Home.css'

function HomePage() {
  return (
<> 
    <Topbar/>
    <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>

</>
  )
}

export default HomePage