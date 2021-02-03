import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import './ServiceOverview.styles.scss'

class ServiceOverview extends React.Component {
    render() {
        const { data } = this.props
        const { edges: logoBrandingItems } = data.logoBrandingQuery
        const { edges: socialMediaItems } = data.socialMediaQuery
        const { edges: webDesignItems } = data.webDesignQuery
        const { edges: marketingDesignItems } = data.marketingDesignQuery

        return (
            <div className='service-overview'>
                {
                    logoBrandingItems
                        ?
                            <div class="service-category">
                                <h2 className="green-text">Logo & Branding</h2>
                                <p className="green-text">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
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
                                                <p>{item.frontmatter.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <Link to="/" className="cta">See more</Link>
                            </div>
                        : null
                }
                {
                    webDesignItems
                        ?
                            <div class="service-category">
                                <h2 className="green-text">Web Design</h2>
                                <p className="green-text">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
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
                                                <p>{item.frontmatter.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <Link to="/" className="cta">See more</Link>
                            </div>
                        : null
                }
                {
                    socialMediaItems
                        ?
                            <div class="service-category">
                                <h2 className="green-text">Social Media Graphics</h2>
                                <p className="green-text">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <div className="three-cols">
                                    {socialMediaItems &&
                                        socialMediaItems.map(({ node: item }) => (
                                            <div 
                                                class="col"
                                                style={{
                                                    'backgroundImage': `url(${item.frontmatter.featuredImage.publicURL})`,
                                                    'backgroundSize': 'cover',
                                                    'background-position': 'center'
                                                }}
                                            >
                                                <p>{item.frontmatter.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <Link to="/" className="cta">See more</Link>
                            </div>
                        : null
                }
                {
                    marketingDesignItems
                        ?
                            <div class="service-category">
                                <h2 className="green-text">Marketing Design</h2>
                                <p className="green-text">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
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
                                                <p>{item.frontmatter.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <Link to="/" className="cta">See more</Link>
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
        socialMediaQuery: PropTypes.shape({
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
                    filter: {frontmatter: {templateKey: {eq: "portfolio-item"}, portfolioCategory: {eq: "logo and branding"}}}
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
                    filter: {frontmatter: {templateKey: {eq: "portfolio-item"}, portfolioCategory: {eq: "marketing design"}}}
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
                socialMediaQuery: allMarkdownRemark(
                    sort: {fields: frontmatter___date, order: DESC}
                    filter: {frontmatter: {templateKey: {eq: "portfolio-item"}, portfolioCategory: {eq: "social media graphics"}}}
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
                    filter: {frontmatter: {templateKey: {eq: "portfolio-item"}, portfolioCategory: {eq: "web design"}}}
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