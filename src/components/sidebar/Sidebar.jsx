import { 
    
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,

     } from '@material-ui/icons'
     import { Link } from "react-router-dom";
import React from 'react'
import './sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
        
                        <ul className="sidebarlist">
                            <li className="sidebarlistitems active">
                              <LineStyle className='sidebarIcon'/>
                              Home
                            </li>
                            <li className="sidebarlistitems">
                              <Timeline className='sidebarIcon'/>
                              Analytics
                            </li>
                            <li className="sidebarlistitems">
                              <TrendingUp className='sidebarIcon'/>
                              Sales
                            </li>
                            

                        </ul>
                    
                </div>

                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Quick Menu</h3>
        
                        <ul className="sidebarlist">
                            <li className="sidebarlistitems active">
                              <PermIdentity  className='sidebarIcon'/>
                              <Link to='/user' className="link">
                              Users
                              </Link>
                            </li>
                            <li className="sidebarlistitems">
                              <Storefront  className='sidebarIcon'/>
                              <Link to="/products" className="link">
                                Products
                              </Link>
                              
                            </li>
                            <li className="sidebarlistitems">
                              <AttachMoney  className='sidebarIcon'/>
                              Transactions
                            </li>
                            <li className="sidebarlistitems">
                            <BarChart className="sidebarIcon" />
                                 Reports
                              </li>
                            

                        </ul>
                    
                </div>


                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Notifications</h3>
        
                        <ul className="sidebarlist">
                            <li className="sidebarlistitems active">
                              <MailOutline  className='sidebarIcon'/>
                              Mail
                            </li>
                            <li className="sidebarlistitems">
                              <DynamicFeed  className='sidebarIcon'/>
                              Feedback
                            </li>
                            <li className="sidebarlistitems">
                              <ChatBubbleOutline  className='sidebarIcon'/>
                              Messages
                            </li>
                            

                        </ul>
                    
                </div>


                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Staff</h3>
        
                        <ul className="sidebarlist">
                            
                            <li className="sidebarlistitems active">
                              <WorkOutline  className='sidebarIcon'/>
                              Manage
                            </li>
                            <li className="sidebarlistitems">
                              <Timeline  className='sidebarIcon'/>
                              Analytics
                            </li>
                            <li className="sidebarlistitems">
                              <Report className='sidebarIcon'/>
                              Reports
                            </li>

                        </ul>
                    
                </div>
            
            </div>
        </div>
    )
}

export default Sidebar
