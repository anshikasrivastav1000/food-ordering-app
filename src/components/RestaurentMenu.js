import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurentMenu = () =>{

  
    const [resInfo,setresInfo] = useState(null);
    const {resId } = useParams()
  useEffect(()=>{
    fetchMenu()

  },[]);

  const fetchMenu = async () =>{
const data = await fetch (
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
);
const json = await data.json();
// console.log(json);
setresInfo(json.data)

  };

  if(resInfo === null) return <Shimmer/>
  

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards)
    return (
    <div className="menu">
       
       <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
       <h2>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(",")}</h2>
       <h2>{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h2>
       <h2>{resInfo?.cards[2]?.card?.card?.info.avgRating}</h2>

       <ul >
        {itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - {item.card.info.
defaultPrice || item.card.info.price /100
}</li> ))}

        
       </ul>
    </div>
 
    )
}
export default RestaurentMenu;