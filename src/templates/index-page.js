import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header/Header'
import Content, { HTMLContent } from '../components/Content/Content'
import ThreeCols from '../components/ThreeCols/ThreeCols'

export const IndexPageTemplate = ({
  title,
  btnLink,
  btnText,
  aboutContent,
  contentComponent,
  aboutPath,
  processColOneCopy,
  processColOneTitle,
  processColTwoCopy,
  processColTwoTitle,
  processColThreeCopy,
  processColThreeTitle,
  processColOneImage,
  processColTwoImage,
  processColThreeImage,
  processSubtitle,
}) => {
  const AboutPageContent = contentComponent || Content

  return (
  <div>
    <Header
      title={title}
      btnText={btnText}
      btnLink={btnLink}
    />
    <AboutPageContent
      content={aboutContent}
      path={aboutPath}
    />
    <ThreeCols
      colOneTitle={processColOneTitle}
      colOneCopy={processColOneCopy}
      colTwoTitle={processColTwoTitle}
      colTwoCopy={processColTwoCopy}
      colThreeTitle={processColThreeTitle}
      colThreeCopy={processColThreeCopy}
      colOneImage={processColOneImage}
      colTwoImage={processColTwoImage}
      colThreeImage={processColThreeImage}
      subtitle={processSubtitle}
    />
  </div>
)}

IndexPageTemplate.propTypes = {
  pageHead: PropTypes.shape({
    title: PropTypes.string.isRequired,
    btnLink: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
  }),
  aboutContent: PropTypes.string,
  contentComponent: PropTypes.func,
  aboutPath: PropTypes.string,
  processColOneCopy: PropTypes.string,
  processColOneTitle: PropTypes.string,
  processColTwoCopy: PropTypes.string,
  processColTwoTitle: PropTypes.string,
  processColThreeCopy: PropTypes.string,
  processColThreeTitle: PropTypes.string,
  processColOneImage: PropTypes.string,
  processColTwoImage: PropTypes.string,
  processColThreeImage: PropTypes.string,
  processSubtitle: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.indexPageQuery
  const { aboutPageQuery: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.pageHead.title}
        btnLink={frontmatter.pageHead.ctaBtn.link}
        btnText={frontmatter.pageHead.ctaBtn.text}
        contentComponent={HTMLContent}
        aboutContent={post.html}
        aboutPath={data.aboutPageQuery.frontmatter.path}
        processColOneCopy={data.processPageQuery.frontmatter.processOverview.colOne.copy}
        processColTwoCopy={data.processPageQuery.frontmatter.processOverview.colTwo.copy}
        processColThreeCopy={data.processPageQuery.frontmatter.processOverview.colThree.copy}
        processColOneTitle={data.processPageQuery.frontmatter.processOverview.colOne.title}
        processColTwoTitle={data.processPageQuery.frontmatter.processOverview.colTwo.title}
        processColThreeTitle={data.processPageQuery.frontmatter.processOverview.colThree.title}
        processColOneImage={data.processPageQuery.frontmatter.processOverview.colOne.iconImage}
        processColTwoImage={data.processPageQuery.frontmatter.processOverview.colTwo.iconImage}
        processColThreeImage={data.processPageQuery.frontmatter.processOverview.colThree.iconImage}
        processSubtitle={data.processPageQuery.frontmatter.subtitle}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    indexPageQuery: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    aboutPageQuery: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    processPageQuery: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    indexPageQuery: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        pageHead {
          title
          ctaBtn {
            link
            text
          }
        }
      }
    }
    aboutPageQuery: markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        path
      }
    }
    processPageQuery: markdownRemark(frontmatter: { templateKey: { eq: "process-page" } }) {
      frontmatter {
        path
        subtitle
        processOverview {
          colOne {
            copy
            title
            iconImage
          }
          colTwo {
            copy
            title
            iconImage
          }
          colThree {
            copy
            title
            iconImage
          }
        }
      }
    }
  }
`
