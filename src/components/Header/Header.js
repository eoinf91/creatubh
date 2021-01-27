import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../navbar/Navbar';
import Egg from '../Egg/Egg';
import Line from '../Line/Line';
import "./header.styles.scss";

const Header = () => {
    return (
        <header>
            <svg id="head-blob" viewBox="0 0 1267 702">
                <path fill="#005236" id="Intersection_3" class="st0" d="M273,678.9l-91.3-51.2C75.2,568.1,67.2,417.8,166.8,347.2c0.9-0.7,1.9-1.3,2.8-2 c47.9-36.3,57.3-104.5,21-152.4c0,0,0,0,0,0l-4.7-6.2c-28.1-37-75.8-53.3-120.7-41.2l-26.6,7.2c-32.3,8.7-53.5-33-27.3-53.9 l19.9-15.9c43.6-34.8,92.2-62.8,144.2-82.9h1091.1v449.3c-30.3,13.5-65.5,10.1-92.6-9l-47.3-33.2c-85-59.6-203-32.3-253.2,58.7 l-33.7,61.2c-21.8,39.6-71.4,54.5-111.5,33.3c-68.9-36.4-153.9-18.4-202,42.9l-23.7,30.1C447.8,702.9,350.3,722.3,273,678.9 L273,678.9z"/>
            </svg>
            <Navbar />
            {/* Two Col */}
            <div className="two-col">
                <div className="col">
                    <h1 className="white-text">Bring your brand story to life</h1>
                    <Link to="/contact" className="cta">
                        Get a quote
                    </Link>
                </div>
                <div className="col">
                    <Egg />
                </div>
            </div>
            <svg viewBox="0 0 1920 146">
                <path fill="#e1f3ed" class="st0" d="M1161.3,52l-110.9,27.2c-179.4,43.9-365.4,54.3-548.6,30.6l-115.8-15c-72.7-9.4-146.5-5.6-217.8,11.2L0,145.7 v0.3h1920v-0.3L1658.9,66C1497.3,16.7,1325.4,11.9,1161.3,52z"/>
            </svg>
            <Line />
        </header>
    )
}

export default Header;