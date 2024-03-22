import React from 'react'
import "./SideBar.css"
import {personsImgs} from "../../utils/images";
import {navigationLinks} from "../../data/data";
import { useState } from 'react';
import { SidebarContext } from '../../Context/sidebarContext';
import { useEffect } from 'react';

const SideBar = () => {

    const [activeLinkIdx] = useState(1);
    const [sidebarClass, setSidebarClass]=useState("");
    const { isSidebarOpen } = useState(SidebarContext);
    console.log(isSidebarOpen);
    
    useEffect(()=>{
        if(isSidebarOpen){
            //sidebar-change
            console.log(setSidebarClass("sidebar-change"))
            setSidebarClass("sidebar-change");
        }else{
            setSidebarClass('');
        }
    },[isSidebarOpen])

  return (
    <div className={`sidebar ${sidebarClass}`}>
        <div className="user-info">
            <div className="info-img img-fit-cover">
                <img src={personsImgs.person_two} alt="profile Image" />
            </div> 
            <span className="info-name">Fatima</span>
        </div>
        <nav className="navigation">
            <ul className="nav-list">
            {
    navigationLinks.map((navigationLink)=>(
        <li className="nav-item" key={navigationLink.id}>
            <a href="#" className={`nav-link ${navigationLink.id===activeLinkIdx? 'active':null}`}>
                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                <span className="nav-link-text">{navigationLink.title}</span>
            </a>

        </li>
))
}
            </ul>
        </nav>

    </div>
  )
}

export default SideBar



