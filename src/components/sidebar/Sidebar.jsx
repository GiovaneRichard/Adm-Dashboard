import React from "react";
import './Sidebar.css';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReportIcon from '@material-ui/icons/Report';
import LocalMallIcon from '@material-ui/icons/LocalMall';


export default () => {
    return(
        <div className="sidebar">
            <div className="sidebar--wrapper">
                <div className="sidebar--menu">
                    <h3 className="sidebar--title">Dashboard</h3>
                    <ul className="sidebar--list">
                        <li className="sidebar--listItem active">
                            <LineStyleIcon className="sidebarIcon" />
                            Início
                        </li>

                        <li className="sidebar--listItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        
                        <li className="sidebar--listItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            Vendas
                        </li>
                    </ul>
                </div>

                <div className="sidebar--menu">
                    <h3 className="sidebar--title">Menu rápido</h3>
                    <ul className="sidebar--list">
                        <li className="sidebar--listItem">
                            <PersonOutlineIcon className="sidebarIcon" />
                            Usuários
                        </li>

                        <li className="sidebar--listItem">
                            <StorefrontIcon className="sidebarIcon" />
                            Produtos
                        </li>
                        
                        <li className="sidebar--listItem">
                            <AttachMoneyIcon className="sidebarIcon" />
                            Transações
                        </li>

                        <li className="sidebar--listItem">
                            <EqualizerIcon className="sidebarIcon" />
                            Notificações
                        </li>
                    </ul>
                </div>

                <div className="sidebar--menu">
                    <h3 className="sidebar--title">Notificações</h3>
                    <ul className="sidebar--list">
                        <li className="sidebar--listItem">
                            <MailOutlineIcon className="sidebarIcon" />
                            E-mails
                        </li>

                        <li className="sidebar--listItem">
                            <DynamicFeedIcon className="sidebarIcon" />
                            Feedback
                        </li>
                        
                        <li className="sidebar--listItem">
                            <ChatBubbleOutlineIcon className="sidebarIcon" />
                            Mensagens
                        </li>
                    </ul>
                </div>

                <div className="sidebar--menu">
                    <h3 className="sidebar--title">Funcionários</h3>
                    <ul className="sidebar--list">
                        <li className="sidebar--listItem">
                            <LocalMallIcon className="sidebarIcon" />
                            Gerenciar
                        </li>

                        <li className="sidebar--listItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        
                        <li className="sidebar--listItem">
                            <ReportIcon className="sidebarIcon" />
                            Relatórios
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}