import RestrudentCard from "./RestrudentCard";
import reslist from "../utils/mockData"
import { useState, useEffect } from "react";
const Body = () => {
   const [listofrestrudent,setlistofrestrudent] = useState(reslist);


   useEffect(()=>{
     fetchData();
   },[]);


   const fetchData = async () =>  {

    const data = await fetch(

      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);


    // setlistofrestrudent(json.data.cards[1].card.card.restaurants)
    



   };

    return(
    
      <div className='body'>
      <div className='filter'>
        <button className="filter-btn" onClick={() => {
            const filteredList = listofrestrudent.filter(
                (res) => res.info.avgRating > 4.5
            );
            setlistofrestrudent(filteredList) 
        }}>
            Top rated Restaurant</button>
      </div>
      <div className='res-container'>
       
        {
        listofrestrudent.map((restrudent) => (<RestrudentCard key={restrudent.info.id} resData={restrudent}/>)
    
        )}
        </div>
      
      </div>
    )
    
    }
    export default Body;