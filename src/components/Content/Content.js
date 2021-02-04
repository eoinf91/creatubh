import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import "./content.styles.scss"

export const HTMLContent = ({ content, className, path }) => (
  <div 
    className={
      className != null
        ? `page-description ${className}`
        : `page-description`
    }
  >
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

const Content = ({ content, className, path }) => (
  <div className={`page-description ${className}`} path={path}>
    {content}
  </div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
  path: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
