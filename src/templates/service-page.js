import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Header from '../components/Header/Header'
import Content, { HTMLContent } from '../components/Content/Content'

export const ServicePageTemplate = ({ 
    title, 
    content, 
    contentComponent,
    backgroundImage,
    subtitle,
  }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Header 
        title={title} 
        backgroundImage={backgroundImage} 
        subtitle={subtitle}
      />
      <PageContent className="content" content={content} />
    </div>
  )
}

ServicePageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  pageHead: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  }),
}

const ServicePage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicePageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.pageHead.title}
        subtitle={frontmatter.pageHead.subtitle}
        content={post.html}
        backgroundImage={frontmatter.pageHead.background.publicURL}
      />
    </Layout>
  )
}

ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicePage

export const ServicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageHead {
          title
          subtitle
          background {
            publicURL
          }
        }
      }
    }
  }
`
