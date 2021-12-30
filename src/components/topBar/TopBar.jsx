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

                    <img className="top--avatar" src="https://scontent.fvdc8-1.fna.fbcdn.net/v/t1.18169-9/1601127_482392625199836_2085716357_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ATpaZTfbGJ4AX8J-AHe&tn=6Rhb3fLS4de3NdP3&_nc_ht=scontent.fvdc8-1.fna&oh=00_AT_Y4xXiEDfbw5Ldls7J7VSMLSKoPzWQZog-j0nLo4JGZQ&oe=61F2CD06" alt="" />
                </div>
            </div>
        </div>
    );
}