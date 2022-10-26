import React from 'react';
import { Link } from 'react-router-dom';
import carIcon from '../../Resources/Images/car-icon-design-free-vector.webp'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                    <img src={carIcon} alt="Bootstrap" width="30" height="24"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/contact'>Contact</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/reviews'>Reviews</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/dashboard'>Dashboard</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/blogs'>Blogs</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/products'>Products</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;