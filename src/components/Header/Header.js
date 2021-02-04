import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../navbar/Navbar';
import Egg from '../Egg/Egg';
import Line from '../Line/Line';
import "./header.styles.scss";

const Header = ({ 
    title, 
    btnLink, 
    btnText, 
    templateKey, 
    subtitle, 
    backgroundImage, 
    eggImage 
}) => {
    return (
        <header
            className=
                {
                    templateKey === 'index-page'
                    ? null
                    : 'has-bg-image'
                }
            style={{ 
                'background': `
                    linear-gradient(rgba(32,104,108,0.85), 
                    rgba(32,104,108,0.8)), 
                    url(${backgroundImage})`,
                'backgroundSize': 'cover',
                'backgroundPosition': 'center',
                'backgroundBlendMode': 'multiply'
            }}
        >
            <svg id="head-blob" viewBox="0 0 1228 701.7">
                <path fill="#005236" id="Intersection_3" d="M234.1,679.2L142.7,628C36.2,568.3,28.3,418.1,127.8,347.5c0.9-0.7,56.2-38.5,41.2-99.5
                c-20.5-83.2-79-59-142.8-102.4C-11.5,119.9-31-6,136.4,0h1091.1v449.3c-30.3,13.5-65.5,10.1-92.6-9l-47.3-33.2
                c-85-59.6-203-32.3-253.2,58.7l-33.7,61.2c-21.8,39.6-71.4,54.5-111.5,33.3c-68.9-36.4-153.9-18.4-202,42.9l-23.7,30.1
                C408.8,703.1,311.4,722.6,234.1,679.2L234.1,679.2z"/>
            </svg>
            <Navbar />
            {
                templateKey === 'index-page'
                ?
                    <div className="two-col">
                        <div className="col">
                            <h1 className="white-text">{ title }</h1>
                            <Link to={btnLink} className="cta">
                                {btnText}
                            </Link>
                        </div>
                        <div className="col">
                            <Egg eggImage={eggImage} />
                        </div>
                    </div>
                : 
                    <div className="head-content">
                        <h1 className="white-text">{ title }</h1>
                        <p className="white-text">{ subtitle }</p>
                    </div>
            }            
            <svg viewBox="0 0 1920 146">
                <path fill="#e1f3ed" class="st0" d="M1161.3,52l-110.9,27.2c-179.4,43.9-365.4,54.3-548.6,30.6l-115.8-15c-72.7-9.4-146.5-5.6-217.8,11.2L0,145.7 v0.3h1920v-0.3L1658.9,66C1497.3,16.7,1325.4,11.9,1161.3,52z"/>
            </svg>
            <Line />
        </header>
    )
}

export default Header;