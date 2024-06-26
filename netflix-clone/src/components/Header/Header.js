import React from 'react';
import "./header.css";
// import NetflixLogofrom 'module';
const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            {/* <li><img src="" alt="" /></li> */}
            <li>NetFlix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse By Language</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            {/* <li>SearchIcon</li>
            <li>NotificationNoneIcon</li>
            <li>AccountBoxIcon</li>
            <li>ArrowDropDownIcon</li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header