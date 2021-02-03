import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import './PortfolioRoll.styles.scss'

class PortfolioRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        
        return (
            <div className="portfolio-gallery">
                <h2 className="green-text">Our latest projects</h2>
                {posts &&
                    posts.map(({ node: post }) => (
                        <div className="portfolio-item" key={post.id}>
                            <h3 className="green-blue-text">{post.frontmatter.title}</h3>
                            <p className="green-blue-text">{post.frontmatter.portfolioCategory}</p>
                            <div className="three-col">
                                <div 
                                    className="col" 
                                    style={{
                                        'background': `url(${post.frontmatter.projectImages.imageOne.publicURL})`,
                                        'backgroundSize': 'cover',
                                        'backgroundPosition': 'center'
                                    }}
                                />
                                <div 
                                    className="col" 
                                    style={{
                                        'background': `url(${post.frontmatter.projectImages.imageTwo.publicURL})`,
                                        'backgroundSize': 'cover',
                                        'backgroundPosition': 'center'
                                    }}
                                />
                                <div 
                                    className="col" 
                                    style={{
                                        'background': `url(${post.frontmatter.projectImages.imageThree.publicURL})`,
                                        'backgroundSize': 'cover',
                                        'backgroundPosition': 'center'
                                    }}
                                />
                            </div>
                        </div>
                ))}
            </div>
        )
    }
}

PortfolioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
        query PortfolioRollQuery {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { frontmatter: { templateKey: { eq: "portfolio-item" } } }
            ) {
                edges {
                    node {
                        excerpt(pruneLength: 400)
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            portfolioCategory
                            featuredImage {
                                publicURL
                            }
                            projectImages {
                                imageOne {
                                    publicURL
                                }
                                imageTwo {
                                    publicURL
                                }
                                imageThree {
                                    publicURL
                                }
                            }
                        }
                    }
                }
            }
        }
    `}
    render={(data, count) => <PortfolioRoll data={data} count={count} />}
  />
)
