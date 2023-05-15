import './dropdown.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";
function Dropdown() {

    const location = useLocation();
    const user = location.state.user;
    const navigate = useNavigate();
  
 
  const [open, setOpen] = useState(false);

  const onUserProfileClick = useCallback(() => {
    navigate("/user-page ",{state: {user}});
  }, [navigate]);


 const logOut = useCallback(() => {
   navigate("/");
   const res =axios.get('/login/logout')
 }, [navigate]);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
   if(!menuRef.current.contains(e.target)){
        setOpen(false);
       console.log(menuRef.current);
      }      
    };

   document.addEventListener("mousedown", handler);
    

  return() =>{
    document.removeEventListener("mousedown", handler);
   }
  });
  
    return (
        <div
        className="Dropdown">
          <div className='menu-container'  ref={menuRef}
          >
            <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img className="vector-icon4" alt="" src="/vector4.svg" />
            
          </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
              <ul>
                <div className="" onClick={onUserProfileClick}>
                  <DropdownItem img = "user.png" text = {"My Profile"} />
                </div>
                <div className="logout"  onClick={logOut}  >
                <DropdownItem img = "logout.png" text = {"Logout"} />
                </div>
              </ul>
            </div>
            
          </div>
        </div>
      );
    
    
    function DropdownItem(props){
      return(
        <li className = 'dropdownItem'>
          <img src={props.img}></img>
          <a> {props.text} </a>
        </li>
      );
}
}

export default Dropdown;