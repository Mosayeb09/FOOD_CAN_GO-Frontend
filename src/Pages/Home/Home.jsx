import { useState } from "react";
import ExploreMenu from "../../Component/ExploreMenu/ExploreMenu";
import Header from "../../Component/Header/Header";
import "./Home.css"
import FoodDisplay from "../../Component/FoodDisplay/FoodDisplay";
import AppDownload from "../../Component/AppDownload/AppDownload";

const Home = () => {
    const [category,setCategory]= useState('All');

    return (
        <div>
            <Header></Header>
            <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
            <FoodDisplay category={category}></FoodDisplay>
            <AppDownload></AppDownload>
        </div>
    );
};

export default Home;