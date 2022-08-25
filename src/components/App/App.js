import './App.scss'
import { useEffect, useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SvgIcon from '@mui/material/SvgIcon';

const App = () => {
    const [screenWidth, setScreenWidth] = useState(null)

    const navigate = (direction) => {
        const elem = document.getElementById('presentation');
        const elemW = elem.clientWidth;
        if (direction === "left") elem.scrollLeft -= elemW;
        else elem.scrollLeft += elemW;
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
                        <div className="slide-container">
                            <div className="slide-inner">
                                <h1>Royalty</h1>
                                <h2>Web Applications</h2>
                            </div>
                        </div>
                        <div className="slide-container">
                            <div clasName="slide-inner">
                                <h2>Web Applications</h2>
                            </div>
                        </div>
                        <div className="slide-container">
                            <div clasName="slide-inner">
                                <h1>test</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-controls right" onClick={() => navigate('right')}><SvgIcon component={ArrowCircleRightIcon} /></div>
            </div>
        </div >
    )
}

export default App