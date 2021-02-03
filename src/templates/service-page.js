import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Header from '../components/Header/Header'
import ServiceOverview from '../components/ServiceOverview/ServiceOverview'
import OneColTextBlock from '../components/OneColTextBlock/OneColTextBlock'

export const ServicePageTemplate = ({ 
    title, 
    backgroundImage,
    subtitle,
    cpTitle,
    cpCopy,
    cpBtnLink,
    cpBtnCopy
  }) => {

  return (
    <div>
      <Header 
        title={title} 
        backgroundImage={backgroundImage} 
        subtitle={subtitle}
      />
      <ServiceOverview />
      <OneColTextBlock
        title={cpTitle}
        subtitle={cpCopy}
        btnLink={cpBtnLink}
        btnText={cpBtnCopy}
      />
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
  creatubhProcess: PropTypes.shape({
    cpTitle: PropTypes.string.isRequired,
    cpCopy: PropTypes.string.isRequired,
    cpBtnCopy: PropTypes.string.isRequired,
    cpBtnLink: PropTypes.string.isRequired,
  })
}

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicePageTemplate
        title={frontmatter.pageHead.title}
        subtitle={frontmatter.pageHead.subtitle}
        backgroundImage={frontmatter.pageHead.background.publicURL}
        cpTitle={frontmatter.creatubhProcess.title}
        cpCopy={frontmatter.creatubhProcess.copy}
        cpBtnLink={frontmatter.creatubhProcess.btnLink}
        cpBtnCopy={frontmatter.creatubhProcess.btnCopy}
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
        creatubhProcess {
          title
          copy
          btnLink
          btnCopy
        }
      }
    }
  }
`
