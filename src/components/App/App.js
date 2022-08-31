import './App.scss'
import { useEffect, useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SvgIcon from '@mui/material/SvgIcon';

import Slide1 from '../Slide1/Slide1'

const App = () => {
    const [screenWidth, setScreenWidth] = useState(null)
    const [slide, setSlide] = useState(1)
    const [max, setMax] = useState(10)

    const navigate = (direction) => {
        if (direction === "left") {
            if (slide === 1) setSlide(max)
            else setSlide(slide - 1)
        }
        if (direction === "right") {
            console.log('right')
            if (slide === max) setSlide(1)
            else setSlide(slide + 1)
        }
    }

    useEffect(() => {
        const screenW = document.getElementById('screen')
        setScreenWidth(screenW.clientWidth);
    }, [])

    return (
        <div className="app-container">
            <div className="app-row">
                <div className="app-controls left" onClick={() => navigate('left')}><SvgIcon component={ArrowCircleLeftIcon} /></div>
                <div className="app-row-screen" id='screen'>
                    <div className="app-presentation" id="presentation">
                        <Slide1 slide={slide} />
                    </div>
                </div>
                <div className="app-controls right" onClick={() => navigate('right')}><SvgIcon component={ArrowCircleRightIcon} /></div>
            </div>
        </div >
    )
}

export default App