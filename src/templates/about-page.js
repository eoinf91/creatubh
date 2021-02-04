import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Header from '../components/Header/Header'
import Content, { HTMLContent } from '../components/Content/Content'
import TwoColImage from '../components/TwoColImage/TwoColImage'

export const AboutPageTemplate = ({ 
  title, 
  content, 
  contentComponent, 
  subtitle, 
  backgroundImage, 
  memberImageOne, 
  memberImageTwo,
  memberNameOne,
  memberNameTwo,
  memberJobTitleOne,
  memberJobTitleTwo,
  memberBioOne,
  memberBioTwo,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Header 
        title={title} 
        subtitle={subtitle} 
        backgroundImage={backgroundImage} 
      />
      <PageContent content={content} />
      <div className='team'>
        <TwoColImage 
          memberImage={memberImageOne}
          name={memberNameOne}
          jobTitle={memberJobTitleOne}
          bio={memberBioOne}
          memberImageTwo={memberImageTwo}
          nameTwo={memberNameTwo}
          jobTitleTwo={memberJobTitleTwo}
        />
      </div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  pageHead: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  teamImageOne: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  teamImageTwo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  memberBioOne: PropTypes.string,
  memberJobTitleOne: PropTypes.string,
  memberNameOne: PropTypes.string,
  memberBioTwo: PropTypes.string,
  memberJobTitleTwo: PropTypes.string,
  memberNameTwo: PropTypes.string,
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
        backgroundImage={frontmatter.pageHead.background.publicURL}
        memberImageOne={frontmatter.companyMemberOne.memberImage.image.publicURL}
        memberImageTwo={frontmatter.companyMemberTwo.memberImage.image.publicURL}
        memberNameOne={frontmatter.companyMemberOne.name}
        memberNameTwo={frontmatter.companyMemberTwo.name}
        memberBioOne={frontmatter.companyMemberOne.bio}
        memberBioTwo={frontmatter.companyMemberTwo.bio}
        memberJobTitleOne={frontmatter.companyMemberOne.jobTitle}
        memberJobTitleTwo={frontmatter.companyMemberTwo.jobTitle}
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
          background {
            publicURL
            childImageSharp {
              fluid {
                originalImg
                src
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        companyMemberOne {
          name
          jobTitle
          bio
          memberImage {
            image {
              publicURL
            }
          }
        }
        companyMemberTwo {
          name
          jobTitle
          bio
          memberImage {
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`
