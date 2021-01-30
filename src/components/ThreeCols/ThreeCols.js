import React from 'react'
import "./threecols.styles.scss"
import { Link } from 'gatsby'

const ThreeCols = ({ 
    colOneTitle, 
    colOneCopy, 
    colTwoTitle, 
    colTwoCopy, 
    colThreeTitle, 
    colThreeCopy,
    colOneImage,
    colTwoImage,
    colThreeImage,
    subtitle
}) => {

    return (
        <div className="three-cols-content">
            <h2 className="green-text">{ subtitle }</h2>
            <div className='three-col'>
                <div className='col'>
                    <img src={colOneImage} alt={ colOneTitle } />
                    <h3 class="green-blue-text">{ colOneTitle }</h3>
                    <p class="green-blue-text">{ colOneCopy }</p>
                </div>
                <div className='col'>
                    <img src={colTwoImage} alt={ colTwoTitle } />
                    <h3 class="green-blue-text">{ colTwoTitle }</h3>
                    <p class="green-blue-text">{ colTwoCopy }</p>
                </div>
                <div className='col'>
                    <img src={colThreeImage} alt={ colThreeTitle } />
                    <h3 class="green-blue-text">{ colThreeTitle }</h3>
                    <p class="green-blue-text">{ colThreeCopy }</p>
                </div>
            </div>
            <Link to="/services/our-process" className="cta">Discover more</Link>
        </div>
    )
}

export default ThreeCols;