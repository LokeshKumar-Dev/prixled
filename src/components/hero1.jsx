import React from 'react'
import { Btn } from './partials'

// css
import '../css/hero1.css'

//assets
import bg_anime from '../assets/bg-anime.svg';
import logo from '../assets/Logo.svg';

export default function hero1() {
    return (
        <div className="hero__1 p">
            <img id="bg_svg" src={bg_anime} alt="bg-svg"/>
            <div className="comingSoon-box">
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="comingSoon">Coming Soon!</h1>
                <h5 className="comingSoon-p">"In a time when almost all aspects of our life are transforming for the better, it's time to give the written word a new, wholesome meaning. A revolutionary blogging platform coming your way. Stay tuned for more!"</h5>
                <Btn/>
            </div>
        </div>
    )
}
