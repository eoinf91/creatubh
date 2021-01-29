import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Header from '../components/Header/Header'
import Content, { HTMLContent } from '../components/Content/Content'

export const ProcessPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Header title={title} />
      <PageContent className="content" content={content} />
    </div>
  )
}

ProcessPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  pageHead: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
}

const ProcessPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProcessPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ProcessPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProcessPage

export const ProcessPageQuery = graphql`
  query ProcessPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
