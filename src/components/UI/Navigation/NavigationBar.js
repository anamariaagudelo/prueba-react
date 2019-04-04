import React from 'react';
// import { Link } from 'react-router-dom';



const NavigationBar = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand" href="/">Custom Github</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {/* <Link to={'/register'}>REGISTER</Link> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
}

export default NavigationBar;