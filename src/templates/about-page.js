import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Header from '../components/Header/Header'
import Content, { HTMLContent } from '../components/Content/Content'

export const AboutPageTemplate = ({ title, content, contentComponent, subtitle }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <PageContent className="content" content={content} />
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  pageHead: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
}

const AboutPage = ({ data }) => {
  const { aboutQuery: post } = data
  const { frontmatter } = data.aboutQuery

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.pageHead.title}
        content={post.html}
        subtitle={frontmatter.pageHead.subtitle}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    aboutQuery: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    aboutQuery: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        pageHead {
          title
          subtitle
        }
      }
    }
  }
`
