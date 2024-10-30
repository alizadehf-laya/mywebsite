import styles from "./Hedear.module.css";
import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';


// const Hedear=()=>{

//     return(
//         <container className={styles.container}>
//             <div className={styles.left}>
            
//             </div>
//             <div className={styles.right}>right</div>
//         </container>

//     )
// }
// export default Hedear
const Hedear = () => {
    return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#fff" backgroundColor="black">
    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>Sidebar</a>
    </CDBSidebarHeader>
    <CDBSidebarContent className="sidebar-content">
    <CDBSidebarMenu>
       
        <img src="/images/helia.jpg" alt="" className={styles.img1}/>
        <h5 className={styles.myname}>laya Alizadeh</h5>
    
    
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
    
    export default Hedear;