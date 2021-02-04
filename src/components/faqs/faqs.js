import React from 'react'
import './faqs.styles.scss'
import { Link } from 'gatsby'

const FAQs = () => {

    return (
        <div className="faqs">
            <div className="faq">
                <h3 className="green-blue-text">How does payment work?</h3>
                <p className="green-blue-text">Only after talking to our clients we will be able to come up with a fair price. Once agreed, we ask our clients to pay a 20% deposit fee. The rest can be paid once the project is finished.</p>
            </div>
            <div className="faq">
                <h3 className="green-blue-text">Do you offer payment plans?</h3>
                <p className="green-blue-text">Yes, we offer 3 and 6 months payment plan options for our web packages. It must be agreed at the start, when the contract is signed.</p>
            </div>
            <div className="faq">
                <h3 className="green-blue-text">Do you only offer web design?</h3>
                <p className="green-blue-text">No, we offer a wide range of other options. Discover more <Link to="/services">here</Link>.</p>
            </div>
            <div className="faq">
                <h3 className="green-blue-text">What is your process for web design?</h3>
                <p className="green-blue-text">We really want to hear and understand what each client is willing to achieve. Find more <Link to="/services/our-process">here</Link> about our process.</p>
            </div>
            <div className="faq">
                <h3 className="green-blue-text">What is the price for logo and branding?</h3>
                <p className="green-blue-text">We believe that each situation is very unique and that is why we like to give a price only after we talk to our clients. For more info, please contact us <Link to="/contact">here</Link>.</p>
            </div>
            <div className="faq">
                <h3 className="green-blue-text">How long does it take for you to finish a website?</h3>
                <p className="green-blue-text">It depends on the design and how many pages the website requires. Typically, it takes from 3 to 6 weeks depending on how quickly we get its content (images and text) from our clients. If you urgently need your website, we will try our best to make it happen.</p>
            </div>
            <div className="faq">
                <h3 className="green-blue-text">Is it possible to get a website maintenance package for further changes?</h3>
                <p className="green-blue-text">Yes, we would happily work on keeping your website up to date. We offer monthly/annual rate or we charge 60 euros p/h.</p>
            </div>
        </div>
    )
}

export default FAQs