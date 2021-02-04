import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Header from '../components/Header/Header'
import Content, { HTMLContent } from '../components/Content/Content'
import ProcessSteps from '../components/ProcessSteps/ProcessSteps'
import OneColTextBlock from '../components/OneColTextBlock/OneColTextBlock'

export const ProcessPageTemplate = ({ 
  title,
  stepOneTitle,
  stepOneDescription,
  stepTwoTitle,
  stepTwoDescription,
  stepThreeTitle,
  stepThreeDescription,
  stepFourTitle,
  stepFourDescription,
  stepFiveTitle,
  stepFiveDescription,
  stepSixTitle,
  stepSixDescription,
  cpTitle,
  cpCopy,
  cpBtnCopy,
  cpBtnLink,
  subtitle
 }) => {

  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <ProcessSteps
        stepOneTitle={stepOneTitle}
        stepOneDescription={stepOneDescription}
        stepTwoTitle={stepTwoTitle}
        stepTwoDescription={stepTwoDescription}
        stepThreeTitle={stepThreeTitle}
        stepThreeDescription={stepThreeDescription}
        stepFourTitle={stepFourTitle}
        stepFourDescription={stepFourDescription}
        stepFiveTitle={stepFiveTitle}
        stepFiveDescription={stepFiveDescription}
        stepSixTitle={stepSixTitle}
        stepSixDescription={stepSixDescription}
      />
      <OneColTextBlock
        title={cpTitle}
        subtitle={cpCopy}
        btnLink={cpBtnLink}
        btnText={cpBtnCopy}
      />
    </div>
  )
}

ProcessPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  pageIntro: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  pageHead: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  creatubhProcess: PropTypes.shape({
    stepOne: PropTypes.shape({
      title: PropTypes.string,
      copy: PropTypes.string
    }),
    stepTwo: PropTypes.shape({
      title: PropTypes.string,
      copy: PropTypes.string
    }),
    stepThree: PropTypes.shape({
      title: PropTypes.string,
      copy: PropTypes.string
    }),
    stepFour: PropTypes.shape({
      title: PropTypes.string,
      copy: PropTypes.string
    }),
    stepFive: PropTypes.shape({
      title: PropTypes.string,
      copy: PropTypes.string
    }),
    stepSix: PropTypes.shape({
      title: PropTypes.string,
      copy: PropTypes.string
    }),
  }),
  relPage: PropTypes.shape({
    title: PropTypes.string,
    copy: PropTypes.string,
    btnLink: PropTypes.string,
    btnCopy: PropTypes.string,
  }),
}

const ProcessPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProcessPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.pageHead.title}
        subtitle={frontmatter.pageHead.pageIntro}
        content={post.html}
        stepOneTitle={frontmatter.creatubhProcess.stepOne.title}
        stepOneDescription={frontmatter.creatubhProcess.stepOne.copy}
        stepTwoTitle={frontmatter.creatubhProcess.stepTwo.title}
        stepTwoDescription={frontmatter.creatubhProcess.stepTwo.copy}
        stepThreeTitle={frontmatter.creatubhProcess.stepThree.title}
        stepThreeDescription={frontmatter.creatubhProcess.stepThree.copy}
        stepFourTitle={frontmatter.creatubhProcess.stepFour.title}
        stepFourDescription={frontmatter.creatubhProcess.stepFour.copy}
        stepFiveTitle={frontmatter.creatubhProcess.stepFive.title}
        stepFiveDescription={frontmatter.creatubhProcess.stepFive.copy}
        stepSixTitle={frontmatter.creatubhProcess.stepSix.title}
        stepSixDescription={frontmatter.creatubhProcess.stepSix.copy}
        cpTitle={frontmatter.relPage.title}
        cpCopy={frontmatter.relPage.copy}
        cpBtnCopy={frontmatter.relPage.btnCopy}
        cpBtnLink={frontmatter.relPage.btnLink}
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
        pageHead {
          title
          pageIntro
        }
        creatubhProcess {
          stepOne {
            title
            copy
          }
          stepTwo {
            title
            copy
          }
          stepThree {
            title
            copy
          }
          stepFour {
            title
            copy
          }
          stepFive {
            title
            copy
          }
          stepSix {
            title
            copy
          }
        }
        relPage {
          title
          copy
          btnLink
          btnCopy
        }
      }
    }
  }
`
