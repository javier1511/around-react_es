import React from 'react';
import headerLogo from '../images/Headerlogo-min.svg';


function Header () {
    return (
        <div className="header">
          <img className="header__logo" src={headerLogo} alt='imagenLogo' />
        </div>
    )
}

export default Header;