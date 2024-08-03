import { LOGO_URL } from "../utils/contants";

const Header = () =>{
    return(
  
      <div className='header'>
        <div  className="logo-container">
       <img  className="logo" src={LOGO_URL}/>
        </div>
        <div className='nav-items'>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
        </div>
      </div>
    )
  }

  export default Header;