import './IntroSection.css'
import React, { use } from 'react'
import { useState } from 'react'
import FloatersPNG from './FloatersPNG'
import useTimeout from '../hooks/useTimeout'

const IntroSection = () => {

    const [showFloaters, setShowFloaters] = useState(false);

    // Show floaters after 2 seconds
    useTimeout(() => {
        setShowFloaters(true);
    }, 2000); 

    const [blurBg, setBlurBg] = useState(false);

    // Blur background after 5 seconds

    useTimeout(() => {
        setBlurBg(true);
        const bgImg = document.querySelector('.intro_bg_container');
        if (bgImg) {
            bgImg.style.filter = 'blur(8px)';
        }
    }, 5000);

    return (
        
        <div className='intro_bg_container'> 
            <img src="./bg.avif" alt="A mountain landscape" />
            {showFloaters && <FloatersPNG />}
        </div>


    )
}

export default IntroSection