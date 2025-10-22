import './IntroSection.css'
import React, { use } from 'react'
import { useState, useEffect } from 'react'
import FloatersPNG from './FloatersPNG'
import useTimeout from '../hooks/useTimeout'

const IntroSection = () => {

    const [showFloaters, setShowFloaters] = useState(false);

    useTimeout(() => {
        setShowFloaters(true);
    }, 2000); 

    return (
        
        <div className='intro_bg_container'> 
            <img src="./bg.avif" alt="A mountain landscape" />
            {showFloaters && <FloatersPNG />}
        </div>


    )
}

export default IntroSection