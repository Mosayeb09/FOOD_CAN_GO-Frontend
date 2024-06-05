import './Navbar.css'
import { assets } from './../../assets/assets';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from './../../Context/StoreContext';

const Navbar = ({setshowForm}) => {
    const [menu,setMenu] = useState(' ')
    const {getTotalcartAmount} =useContext(StoreContext);
    return (
        <div className='navbar'>
           <Link to={'/'}> <img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to={'/'} onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu('Menu')} className={menu==="Menu"?'active':''} >Menu</a>
                <a href='#app-download' onClick={()=>setMenu('Mobile-App')} className={menu==='Mobile-App'?'active':''} > Mobile-App </a>
                <a href='#footer' onClick={()=>setMenu('Contact us')} className={menu==='Contact us'?'active':''}>Contact us</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalcartAmount()===0?'':'dot'}>
                        {/* <img src= alt="" /> */}
                    </div>

                </div>
                <button onClick={()=>setshowForm(true)}>Sign in</button>

            </div>
            
        </div>
    );
};

export default Navbar;