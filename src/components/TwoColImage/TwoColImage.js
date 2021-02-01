import React from 'react';
import Egg from '../Egg/Egg'

import './TwoColImage.styles.scss';

const TwoColImage = ({ memberImage, name, jobTitle, bio }) => {
    return (
        <div className="two-col two-col-image">
            <div className="col single">
                <Egg eggImage={memberImage} />
            </div>
            <div className="col double">
                <h3 className="green-text">{name}</h3>
                <h4 className="green-blue-text">{jobTitle}</h4>
                <p className="green-blue-text">{bio}</p>
            </div>
        </div>
    )
}

export default TwoColImage;