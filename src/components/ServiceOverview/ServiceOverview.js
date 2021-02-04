import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import './ServiceOverview.styles.scss'

class ServiceOverview extends React.Component {
    render() {
        const { data } = this.props
        const { edges: logoBrandingItems } = data.logoBrandingQuery
        const { edges: webDesignItems } = data.webDesignQuery
        const { edges: marketingDesignItems } = data.marketingDesignQuery

        return (
            <div className='service-overview'>
                {
                    logoBrandingItems
                        ?
                            <div class="service-category">
                                <h2 className="green-text">Logo & Branding</h2>
                                <div className="three-cols">
                                    {logoBrandingItems &&
                                        logoBrandingItems.map(({ node: item }) => (
                                            <div 
                                                class="col"
                                                style={{
                                                    'backgroundImage': `url(${item.frontmatter.featuredImage.publicURL})`,
                                                    'backgroundSize': 'cover',
                                                    'background-position': 'center'
                                                }}
                                            >
                                            </div>
                                        ))
                                    }
                                </div>
                                <Link to="/portfolio" className="cta">See more</Link>
                            </div>
                        : null
                }
                {
                    webDesignItems
                        ?
                            <div class="service-category">
                                <h2 className="green-text">Web Design</h2>
                                <div className="three-cols">
                                    {webDesignItems &&
                                        webDesignItems.map(({ node: item }) => (
                                            <div 
                                                class="col"
                                                style={{
                                                    'backgroundImage': `url(${item.frontmatter.featuredImage.publicURL})`,
                                                    'backgroundSize': 'cover',
                                                    'background-position': 'center'
                                                }}
                                            >
                                            </div>
                                        ))
                                    }
                                </div>
                                <Link to="/portfolio" className="cta">See more</Link>
                            </div>
                        : null
                }
                {
                    marketingDesignItems
                        ?
                            <div class="service-category">
                                <h2 className="green-text">Marketing Design</h2>
                                <div className="three-cols">
                                    {marketingDesignItems &&
                                        marketingDesignItems.map(({ node: item }) => (
                                            <div 
                                                class="col"
                                                style={{
                                                    'backgroundImage': `url(${item.frontmatter.featuredImage.publicURL})`,
                                                    'backgroundSize': 'cover',
                                                    'background-position': 'center'
                                                }}
                                            >
                                            </div>
                                        ))
                                    }
                                </div>
                                <Link to="/portfolio" className="cta">See more</Link>
                            </div>
                        : null
                }
            </div>
        )
    }
}

ServiceOverview.propTypes = {
    data: PropTypes.shape({
        logoBrandingQuery: PropTypes.shape({
            edges: PropTypes.array,
        }),
        marketingDesignQuery: PropTypes.shape({
            edges: PropTypes.array,
        }),
        webDesignQuery: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
            query ServiceOverviewQuery {
                logoBrandingQuery: allMarkdownRemark(
                    sort: {fields: frontmatter___date, order: DESC}
                    filter: {frontmatter: {templateKey: {eq: "portfolio-item"}, portfolioCategory: {eq: "Logo and Branding"}}}
                    limit: 3
                ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                featuredImage {
                                    publicURL
                                }
                            }
                        }
                    }
                }
                marketingDesignQuery: allMarkdownRemark(
                    sort: {fields: frontmatter___date, order: DESC}
                    filter: {frontmatter: {templateKey: {eq: "portfolio-item"}, portfolioCategory: {eq: "Marketing Design"}}}
                    limit: 3
                ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                featuredImage {
                                    publicURL
                                }
                            }
                        }
                    }
                }
                webDesignQuery: allMarkdownRemark(
                    sort: {fields: frontmatter___date, order: DESC}
                    filter: {frontmatter: {templateKey: {eq: "portfolio-item"}, portfolioCategory: {eq: "Web Design"}}}
                    limit: 3
                ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                featuredImage {
                                    publicURL
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <ServiceOverview data={data} count={count} />}
    />
)