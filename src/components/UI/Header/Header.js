import React from 'react';


const Header = (props)=>{
    return(
        <div className="jumbotron">
            <li>{props.nombre}</li>
            <li>{props.lastName}</li>    
            <li>{props.id}</li>  
            <li>{props.date}</li>  
            <li>{props.email}</li>  
            <li>{props.userGit}</li>  
            <hr></hr>
        </div>
    )
}

export default Header;