import { CDN_URL } from "../utils/contants";
const RestrudentCard = (props) =>{
    const { resData} = props;

    // console.log(resData.info.name);
    
  const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime} = resData?.info;
    return(
  
      <div className='res-card'>
        <img className='res-logo' src={ CDN_URL + cloudinaryImageId}/>
  
       <h3>{name}</h3>
       <h4>{cuisines.join(",")}</h4>
       <h3>{avgRating}</h3>
       <h4>{deliveryTime}</h4>
      </div>
    )
  }
  export default RestrudentCard;