import React from 'react';
import './homepage.styles.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                {/* -------------menu-item-1------------------ */}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* -------------menu-item-2------------------ */}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* -------------menu-item-3------------------ */}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* -------------menu-item-4------------------ */}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* -------------menu-item-5------------------ */}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
    }
export default Homepage;