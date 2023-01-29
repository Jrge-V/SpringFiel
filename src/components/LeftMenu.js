import React from 'react'
import "../Styles/LeftMenu.css"

//import top left logo from react icons
import { BsLightningCharge, BsThreeDots } from "react-icons/bs";

//import search icon from react
import{BiSearchAlt} from "react-icons/bi";

//import Menu.js
import {Menu} from './Menu'

//import menu list
import {MenuList} from './MenuList'

//import menu playlist
import { MenuPlaylist } from './MenuPlaylist';

//import tracklist BOTTOM MENU BY THE VOLUME SCROLLER
import { TrackList } from './TrackList';

function LeftMenu() {
  return (
  <div className = 'leftMenu'> 
<div className='logoContainer'>
<i>
    <BsLightningCharge />
    </i>
  <h2> MelloAmp </h2>
  <i>
    <BsThreeDots />
    </i>

</div>

<div className="searchBox">
    <input type="text" placeholder='Search...'/>
    <i className='searchIcon'> 
      <BiSearchAlt/> 
      </i>
      </div>


      <Menu title={'Menu'} menuObject={MenuList} />


      <MenuPlaylist />

      <TrackList />
</div>
  );  
}




export {LeftMenu};