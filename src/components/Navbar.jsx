import "../components/navbar.css";

function Navbar() {
  
  
  
  
  return (
    <>
      <div className="navbar">
        <h3 className="stbt">s҉h҉o҉c҉k҉​</h3>
        <ul className="options">
          <li>Home</li>
          <li>About</li>  
          <li>
            <div className="dropdownn">
            <button className="drpbtn">Shop</button>
            <div className="dropdown-cnt">
               <a href="#">All products</a>
               <a href="#">New Arrivals</a>
               <a href="#">Popular Items</a>
            </div>
            </div>
          </li>
        </ul>
        <button className="cart"><img className="cart-image" style={{width:"45px",height:"auto",padding:"0px 10px 4px 0px"}} src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"></img>Cart{}</button>
        <button className="mblecart" ><img className="mble-image" src="/src/assets/reels.jpeg"></img></button> 
         
      </div>
    </>
  );  
}

export default Navbar;
