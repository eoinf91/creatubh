import React from 'react'
import Header from '../../components/Header/Header'
import Layout from '../../components/Layout'
import PortfolioRoll from '../../components/PortfolioRoll/PortfolioRoll'
import OneColTextBlock from '../../components/OneColTextBlock/OneColTextBlock'

export default class PortfolioIndexPage extends React.Component {
    render() {

        return (
            <Layout>
                <Header
                    title={"Creatubh Work"}
                    subtitle={"Are you thinking of working with us but you need a further example of what our work looks like? Take a closer look at our most recent projects."}
                />
                <PortfolioRoll />
                <OneColTextBlock
                    title={"Creatubh Process"}
                    subtitle={"Are you curious to know more on how we create and our creatubh process?"}
                    btnLink={"/services/our-process"}
                    btnText={"Learn More"}
                />
            </Layout>
        )
    }
}