
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurant ] = useState([]); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);

        //Optional Chaining
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };

// Conditional Rendering
//    if (listOfRestaurants.length === 0){
//        return <Shimmer />;
//    };

    return listOfRestaurants.length === 0 ? (
            <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">  
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (rest) => rest.info.avgRating > 4.3
                    );
                    setlistOfRestaurant(filteredList); 
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant) => (<RestaurantCard key = {restaurant.info.id} restData= {restaurant} />))}         
            </div>
        </div>
        // Always use key and not using keys is not acceptable, React needs to to know which object to render if the key is not used then it will rerender the whole thing and throws a warning it is not a good way of writing code
    );
};

export default Body;