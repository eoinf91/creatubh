import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Header from '../../components/Header/Header'
import Form from '../../components/Form/Form'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <Header
          title={"Get in touch"}
          subtitle={"If you do not ask, the answer is always no! If you have any question that could help you make a decision, don’t be afraid to ask. We are always happy to reply and help in any way we possibly can."}
        />
        <Form
          formHeading={ "Get in touch!" }
          formSubheading={ "Complete the form below and we will get back to you asap!" }
        />
      </Layout>
    )
  }
}
