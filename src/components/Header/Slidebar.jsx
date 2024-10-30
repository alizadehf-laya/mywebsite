import styles from "./Hedear.module.css";
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';
const Slidbar = () => {
    return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#1c1a1b">
    {/* <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>Sidebar</a>
    </CDBSidebarHeader> */}
    <CDBSidebarContent className="sidebar-content">
    <CDBSidebarMenu>
       
        <img src="/images/helia.jpg" alt="" className={styles.img1}/>
        <h5 className={styles.myname}>laya Alizadeh</h5>
        <div className={styles.Icons}>
            <div className={styles.IconRadious}>
            <Icon.Instagram size={20} color="#fff"/>
            </div>
            <div className={styles.IconRadious}>
            <Icon.Facebook size={20} color="#fff"/>
            </div>
            <div className={styles.IconRadious}>
            <Icon.Telegram size={20} color="#fff"/>
            </div>
            <div className={styles.IconRadious}>
            <Icon.Linkedin size={20} color="#fff"/>
            </div>
            <div className={styles.IconRadious}>
            <Icon.Github size={20} color="#fff"/>
            </div>
        
        </div>
    
    <NavLink exact to="/" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
    </NavLink>
    <NavLink exact to="/tables" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
    </NavLink>
    <NavLink exact to="/profile" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
    </NavLink>
    <NavLink exact to="/analytics" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
    </NavLink>
    <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
    </NavLink>
    </CDBSidebarMenu>
    </CDBSidebarContent>
    <CDBSidebarFooter style={{ textAlign: 'center' }}>
    <div style={{ padding: '20px 5px' }}>Sidebar Footer</div>
    </CDBSidebarFooter>
    </CDBSidebar>
    </div>
    );
    };
    
    export default Slidbar;