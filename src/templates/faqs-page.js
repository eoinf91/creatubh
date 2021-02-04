import React from 'react'
import FAQs from '../components/faqs/faqs'
import Header from '../components/Header/Header'
import Layout from '../components/Layout'

export const FaqPageTemplate = () => {
    return (
        <div class="faq-page">
            <Header
                title={"FAQs"}
                subtitle={"Take a look at what our clients regularly ask."}
            />
            <FAQs />
        </div>
    )
}

const FaqPage = () => {

    return (
        <Layout>
            <FaqPageTemplate />
        </Layout>
    )
}

export default FaqPage