import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';



const NavigationBar= () =>{
    return(
        <nav className="navigation">
            <Link to={'/'}>HOME</Link>
            <Link to={'/register'}>REGISTER</Link>           
        </nav>
    );
}

export default NavigationBar;