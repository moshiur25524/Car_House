import React from 'react';
// import { NavLink as CustomLink } from 'react-router-dom';
// import { NavNavLink } from 'react-router-dom';
import carIcon from '../../Resources/Images/car-icon-design-free-vector.webp'
import CustomLink from '../../shared/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <CustomLink className="navbar-brand" to='/'>
                    <img src={carIcon} alt="Bootstrap" width="30" height="24"/>
                    </CustomLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CustomLink className="nav-link active" aria-current="page" to='/'>Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" activeclassname="active" aria-current="page" to='/about'>About</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" activeclassname="active" aria-current="page" to='/contact'>Contact</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" activeclassname="active" aria-current="page" to='/reviews'>Reviews</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" aria-current="page" to='/dashboard'>Dashboard</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" aria-current="page" to='/blogs'>Blogs</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" aria-current="page" to='/volunteers'>Volunteers</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" aria-current="page" to='/products'>Products</CustomLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;