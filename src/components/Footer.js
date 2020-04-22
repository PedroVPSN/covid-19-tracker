import React from 'react'
import stay from '../images/stay.png'
import protect from '../images/protect.png'
import save from '../images/save.png'

const Footer = () => {
    return (
        <div className="footerContainer">
            <div>
                <img className="footerImage" src={stay} alt="Stay at home"/>
            </div>
            <div >
                <img className="footerImage" src={protect} alt="Protect NHS" />
            </div>
            <div >
                <img className="footerImage" src={save} alt="Save lives" />
            </div>
        </div>
    )
}

export default Footer
