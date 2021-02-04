import React from 'react';
import Egg from '../Egg/Egg'

import './TwoColImage.styles.scss';

const TwoColImage = ({ 
    memberImage, 
    name, 
    jobTitle, 
    memberImageTwo,
    nameTwo,
    jobTitleTwo
}) => {
    return (
        <div className="two-col two-col-image">
            <div className="col">
                <Egg eggImage={memberImage} />
                <h3 className="green-text">{name}</h3>
                <h4 className="green-blue-text">{jobTitle}</h4>
            </div>
            <div className="col">
                <Egg eggImage={memberImageTwo} />
                <h3 className="green-text">{nameTwo}</h3>
                <h4 className="green-blue-text">{jobTitleTwo}</h4>
            </div>
        </div>
    )
}

export default TwoColImage;