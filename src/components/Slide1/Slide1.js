import './Slide1.scss'
import { useState } from 'react'

const Slide1 = ({ slide }) => {

    return (
        <div className="slide-container">
            {slide === 1 && (
                <div className="slide-inner">
                    <h1>Royalty</h1>
                    <h2>Automation & reporting of music royalties.</h2>
                </div>
            )}
        </div>
    )
}

export default Slide1