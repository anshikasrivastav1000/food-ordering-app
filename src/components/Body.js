import RestrudentCard from "./RestrudentCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
   const [listofrestrudent,setlistofrestrudent] = useState(resList)

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