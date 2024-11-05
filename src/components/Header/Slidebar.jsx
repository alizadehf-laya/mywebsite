import styles from "./Hedear.module.css";
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import{Link} from "react-router-dom";


const Slidbar = () => {
    return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position:"absolute",  zIndex:"1"}}>
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
            <Icon.Instagram size={18} color="#fff" style={{display:"inline-block"}}/>
            </div>
            <div className={styles.IconRadious}>
            <Icon.Facebook size={18} color="#fff" />
            </div>
            <div className={styles.IconRadious}>
            <Icon.Telegram size={18} color="#fff"/>
            </div>
            <div className={styles.IconRadious}>
            <Icon.Linkedin size={18} color="#fff"/>
            </div>
            <div className={styles.IconRadious}>
            <Icon.Github size={18} color="#fff"/>
            </div>
        
        </div>
    
    <NavLink exact to="/" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="home"className={styles.Cicon}><Link to="/"><span className={styles.Ctext}>Home</span></Link></CDBSidebarMenuItem >
    </NavLink>
    <NavLink exact to="/portfolio" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="table"className={styles.Cicon}><Link to="/portfolio"><span className={styles.Ctext}>Portfolio</span></Link></CDBSidebarMenuItem>
    </NavLink>
    <NavLink exact to="/about" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="user"className={styles.Cicon}><Link to="/about"><span className={styles.Ctext}>About</span></Link></CDBSidebarMenuItem>
    </NavLink>
    <NavLink exact to="/profile" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="file"className={styles.Cicon}><Link to="/profile"><span className={styles.Ctext}>Profile</span></Link></CDBSidebarMenuItem>
    </NavLink>
    <NavLink exact to="/contact" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="phone"className={styles.Cicon}><Link to="/contact"><span className={styles.Ctext}>Contact</span></Link></CDBSidebarMenuItem>
    </NavLink>
    </CDBSidebarMenu>
    </CDBSidebarContent>
    {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
    <div style={{ padding: '20px 5px' }}>Sidebar Footer</div>
    </CDBSidebarFooter> */}
    </CDBSidebar>
    </div>
    );
    };
    
    export default Slidbar;