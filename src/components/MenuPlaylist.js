import React from 'react'
//playlist icon
import {FaPlus} from 'react-icons/fa';
import { BsMusicNoteList, BsTrash } from 'react-icons/bs';
//import the playlists
import { PlayList } from './PlayList';

function MenuPlaylist() {
  return (
<div className='playListContainer'>
    <div className="nameContainer">
        <p>PlayList</p>
        <i>
            <FaPlus/>
        </i>
    </div>
    <div className="playListScroll">

        {
            PlayList && PlayList.map((list) => (
                <div className="playList">
                <i className='list'>
                    <BsMusicNoteList />
                </i>
        
                <p> Sample Name</p>
        
        
                <i className='trash'>
                    <BsTrash />
                </i>
        
                </div>
            ))}
    </div>
  </div>
  );
}

export {MenuPlaylist};