import React from 'react'
import EggText from '../EggText/EggText'

import './ProcessSteps.styles.scss'

const ProcessSteps = ({
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
}) => {
    return (
        <div className="process-steps">
            <div className="step">
                <div className="egg-step">
                    <EggText />
                    <div class="content">
                        <p>Step</p>
                        <h2>01</h2>
                    </div>
                </div>
                <div className="step-content">
                    <h3 className="green-blue-text">{stepOneTitle}</h3>
                    <p className="green-blue-text">{stepOneDescription}</p>
                </div>
            </div>
            <div className="step">
                <div className="egg-step">
                    <EggText />
                    <div class="content">
                        <p>Step</p>
                        <h2>02</h2>
                    </div>
                </div>
                <div className="step-content">
                    <h3 className="green-blue-text">{stepTwoTitle}</h3>
                    <p className="green-blue-text">{stepTwoDescription}</p>
                </div>
            </div>
            <div className="step">
                <div className="egg-step">
                    <EggText />
                    <div class="content">
                        <p>Step</p>
                        <h2>03</h2>
                    </div>
                </div>
                <div className="step-content">
                    <h3 className="green-blue-text">{stepThreeTitle}</h3>
                    <p className="green-blue-text">{stepThreeDescription}</p>
                </div>
            </div>
            <div className="step">
                <div className="egg-step">
                    <EggText />
                    <div class="content">
                        <p>Step</p>
                        <h2>04</h2>
                    </div>
                </div>
                <div className="step-content">
                    <h3 className="green-blue-text">{stepFourTitle}</h3>
                    <p className="green-blue-text">{stepFourDescription}</p>
                </div>
            </div>
            <div className="step">
                <div className="egg-step">
                    <EggText />
                    <div class="content">
                        <p>Step</p>
                        <h2>05</h2>
                    </div>
                </div>
                <div className="step-content">
                    <h3 className="green-blue-text">{stepFiveTitle}</h3>
                    <p className="green-blue-text">{stepFiveDescription}</p>
                </div>
            </div>
            <div className="step">
                <div className="egg-step">
                    <EggText />
                    <div class="content">
                        <p>Step</p>
                        <h2>06</h2>
                    </div>
                </div>
                <div className="step-content">
                    <h3 className="green-blue-text">{stepSixTitle}</h3>
                    <p className="green-blue-text">{stepSixDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default ProcessSteps