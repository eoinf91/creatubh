import React from 'react'
import { Link } from 'gatsby'

import './OneColTextBlock.scss';

const OneColTextBlock = ({
    title,
    subtitle,
    btnText,
    btnLink,
}) => {
    return (
        <div className="one-col">
            <h2 className="green-text">{ title }</h2>
            <p className="green-text">{ subtitle }</p>
            <Link to={btnLink} className="cta">{ btnText }</Link>
        </div>
    )
}

export default OneColTextBlock;