import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () =>{


  const [btnNameReact ,setbtnNameReact] = useState("Login")
    return(
  
      <div className='header'>
        <div  className="logo-container">
       <img  className="logo" src={LOGO_URL}/>
        </div>
        <div className='nav-items'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact Us</Link>Contact Us</li>
        <li>Cart</li>
        <button className="login" onClick={() => {
        btnNameReact=== "Login"
        ? setbtnNameReact("Logout")
        : setbtnNameReact("Login")
        }}>{btnNameReact}
        </button>
        </div>
      </div>
    )
  }

  export default Header;