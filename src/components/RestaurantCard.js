import {CDN_URL} from "../utils/constants.js";

const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
    const { restData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = restData?.info;
    const {deliveryTime} = restData?.info?.sla;
    return (
        <div className="rest-card" style={styleCard}>
            <img className="rest-logo" alt="restlogo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;