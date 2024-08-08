import RestrudentCard from "./RestrudentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofrestrudent, setlistofrestrudent] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterRestaurant,setfilteredList ] = useState([])
//whenever state variable is updated, react triggers a reconcilation cycle(rerender the component )

//if no dependency arrry => useeffect is called on every render
// if dependency arry is empty = [] =>useeffect is called on initial render(just once)
// if dependency arry is btnnamereact => called every time btnnamereact updated
  useEffect(() => {
    fetchData();

  }, []);


  const fetchData = async () => {

    const data = await fetch(

      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log( json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

    // );


    setlistofrestrudent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)



  };
  //conditional rendering
  // if( listofrestrudent.length === 0){

  //   return <Shimmer/>
  // }

  return listofrestrudent.length === 0 ? <Shimmer /> : (

    <div className='body'>
      <div className='filter'>
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(event) => {

            setsearchText(event.target.value)
          }} />
          <button onClick={() => {
        

         
          const filterRestaurant =  listofrestrudent.filter(
            (res) =>{

              console.log(res.info.name)
             return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            
            }  );
        console.log(filterRestaurant)
        setfilteredList(filterRestaurant)

          
          }}>
          Search</button>
        </div>
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
          filterRestaurant.map((restrudent) => ( <Link 
            key={restrudent.info.id}
            to={"/restaurent/"+ restrudent.info.id}>
              <RestrudentCard  resData={restrudent} /></Link>)

          )}
      </div>

    </div>
  )

}
export default Body;