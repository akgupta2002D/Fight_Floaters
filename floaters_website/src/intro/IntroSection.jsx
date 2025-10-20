import './IntroSection.css'
import React, { use } from 'react'
import { useState, useEffect } from 'react'
import FloatersPNG from './FloatersPNG'

const IntroSection = () => {

    const [showFloaters, setShowFloaters] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Showing floaters");
            setShowFloaters(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='intro_bg_container'>
            <img src="./bg.avif" alt="A mountain landscape" />
            {showFloaters && <FloatersPNG />}
        </div>


    )
}

export default IntroSection