import React from 'react';
import './TopBar.css';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

export default () => {
    return(
        <div className="top--bar">
            <div className="topbar--wrapper">
                <div className="top--left">
                    <span className="logo">grx-Admin</span>
                </div>
                <div className="top--right">
                    <div className="topbarIcon--container">
                        <NotificationsNoneIcon />
                        <span className="topIcon--badge">2</span>
                    </div>

                    <div className="topbarIcon--container">
                        <LanguageIcon />
                        <span className="topIcon--badge">2</span>
                    </div>

                    <div className="topbarIcon--container">
                        <SettingsIcon />
                    </div>

                    <img className="top--avatar" src="https://yt3.ggpht.com/yti/APfAmoHWDJUfU0O2HwRJ1UE5A6-aFnNEdPvi4Fjc8h47qQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
                </div>
            </div>
        </div>
    );
}