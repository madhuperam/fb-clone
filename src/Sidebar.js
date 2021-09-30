import { ExpandMoreOutlined } from '@mui/icons-material';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oebT-Erez_xS7W3OpFBJY4k1WyZ4Ah3RU98ijlG_yyrstEpNnwbxpMrypdF_HQCT5_U&usqp=CAU" 
                title="Madhu Peram"/>
            <SidebarRow 
                Icon={LocalHospitalIcon} 
                title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
