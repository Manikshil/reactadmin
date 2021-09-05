import React from 'react';
import './topbar.css';
import avatar from '../../img/avatar.svg'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className='logo'>React Admin</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <img src={avatar} alt="avatar" className='avatar' />
                </div>
            </div>
            
        </div>
    )
}

export default Topbar;
