import React from 'react';
import { BsCart3, BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X2GapFill,BsPeopleFill,
    BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs';
    import { Link } from 'react-router-dom';

const Saidbar = () => {
    return (
       <aside id='sidebar'>
<div className="sidebar-title">
    <div className="sidebar-brand">
      <div className="all">
      <Link to={'/'} className='icon_header'>
<BsCart3  className='icon_header'/> 
      </Link>
      </div>
      <div className="all">
<p>Shop</p>
      </div>
    
    </div>
    <span className="icon close_icon">X</span>
</div>
<ul className="sidebar-list">
    <li className="sidebar-list-item">
      <a href="" className="">  <BsGrid1X2Fill className="icon "/> Dashboard</a>
    </li>
    <li className="sidebar-list-item">
      <Link to={'products'}><BsFillArchiveFill className="icon "/> Products</Link>
    </li>
    <li className="sidebar-list-item">
    <a href="" className="">    <BsFillGrid3X2GapFill className="icon "/> Categories</a>
    </li>
    <li className="sidebar-list-item">
       <a href="" className=""> <BsPeopleFill className="icon "/> Customers</a>
    </li>
    <li className="sidebar-list-item">
      <a href="" className="">  <BsListCheck className="icon "/> Enventory</a>
    </li>
    <li className="sidebar-list-item">
        <a href="" className=""> <BsMenuButtonWideFill className="icon "/> Reports</a>
    </li>
    <li className="sidebar-list-item">
       <a href="" className=""> <BsFillGearFill className="icon "/> Setting</a>
    </li>
</ul>
       </aside>
    );
}

export default Saidbar;
