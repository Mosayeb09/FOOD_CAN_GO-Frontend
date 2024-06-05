
// import { assets } from '../../assets/assets';
import './Header.css'

const Header = () => {
    return (
        <div className='headers' >
            {/* <img src={assets.header_img} alt="" /> */}
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Choose form a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.  </p>
                <button className='btn_h'>View Menu</button>
            </div>
            
        </div>
    );
};

export default Header;