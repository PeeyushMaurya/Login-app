import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({user}) {

    const logout = () => {
        window.open("http://localhost:5000/auth/logout","_self");
    }

  return (
      <div className="navbar">
          <span className='logo' > <Link className='link' to="/" > Delima </Link> </span> {
              user ? (

             
          <ul className="list">
              <li className="listItem">
                  <img className='avatar' src={user.photos[0].value} alt="" />
              </li>
              <li className="listItem"> {user.displayName}</li>
              <li className="listItem" onClick={logout}>logout</li>
          </ul>
           ) : (
               <Link className='link' to="/login" > Login </Link>
           )
          }
      </div>
  )
}
