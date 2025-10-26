import './IntroSection.css'
import React, { use } from 'react'
import { useState } from 'react'
import FloatersPNG from './FloatersPNG'
import useTimeout from '../hooks/useTimeout'
import Typewriter from "typewriter-effect";
import Button from '../components_general/Button'
import { Link } from 'react-router-dom';


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
        const bgImg = document.querySelector('.bg_and_floaters_container');
        if (bgImg) {
            bgImg.style.filter = 'blur(8px)';
        }
    }, 5000);

    const [showIntroText, setShowIntroText] = useState(false);

    const IntroText = ["Floaters", "SUCK!", "But we can help."];

    useTimeout(() => {
        setShowIntroText(true);
    }, 5500);



    return (
        <>
        <div className='intro_bg_container'> 
            <div className='bg_and_floaters_container'>
                <img src="./bg.avif" alt="A mountain landscape" />
                {showFloaters && <FloatersPNG />}
            </div>
            <div className='intro_text'>
                {showIntroText && <h1>{IntroText.join(" ")}</h1>}
                {showIntroText && (
                    <Button>
                        <Link to="/hero">Begin the story!</Link>
                    </Button>
                )}
            </div>
        </div>
      </>
    )
}

export default IntroSection