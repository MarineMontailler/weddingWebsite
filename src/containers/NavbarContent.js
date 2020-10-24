import React from "react";

import {Link} from 'react-router-dom';

const NavbarContent = () => {
  return (
    
<div className="sketchy">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/">Calendrier</a>
        </li>
        <li>
          <Link to="/Album">Album Photos</Link>
        </li>
        <li>
          <a href="/">Hébergement</a>
        </li>
        <li>
          <a href="/">Présence</a>
        </li>
        <li>
          <a href="/">Plan d'Accès</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
    
    
  );
};

export default NavbarContent;
