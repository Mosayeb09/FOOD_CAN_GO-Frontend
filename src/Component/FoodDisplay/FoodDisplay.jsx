
import './FoodDisplay.css'
import { food_list } from './../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {
                    food_list.map((item, index) => {
                        if (category === "All" || category === item.category) { return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} ></FoodItem> }



                    })
                }
            </div>

        </div>
    );
};

export default FoodDisplay;