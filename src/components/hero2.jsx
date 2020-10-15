import React from 'react'

//css
import '../css/hero2.css'

//partials -- svg
import { Ellipse, HalfC, QuaterC, BigC, SmallC, StrokeC, RelayC, RectDot, Book1, Book2, Book3} from './partials'

export default function hero2() {
    return (
        <div className="hero__2 p">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" style={{width: '100%', height: '100%', transform: "translate3d('0px', '0px', '0px')"}}>
                    
                    <Ellipse/>                    
                    <HalfC/>
                    <SmallC/>
                    <QuaterC/>
                    <BigC/>
                    <StrokeC/>
                    <RelayC/>
                    <RectDot/>
        
                    {/* <!-- =====BOOKS==== --> */}
                    <g className="books">
                        <Book1/>
                        <Book2/>
                        <Book3/>
                    </g>
            </svg>
        </div>
    )
}
