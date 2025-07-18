import "../styles/Component8.css"
import foot from '../assets/foot.svg'
import fb from '../assets/fb.svg'
import google from '../assets/google.svg'
import ig from '../assets/ig.svg'
import x from '../assets/x.svg'
import link from '../assets/link.svg'
import yt from '../assets/yt.svg'
import React from 'react';
    




const Footer = () => {

    return(
        <>
        <footer className="footer">
            <div className="parent701">
                <img src={foot} alt="" className="img701"/>
                <div className="parent702">
                    <div className="parent703">
                        <div>
                            <ul>
                                <li><a href="">About us</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Portfolio</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="">0800 534 5181</a></li>
                                <li><a href="mailto:info@brilworx.com">info@brilworx.com</a></li>
                            </ul>
                        </div>
                        <div className="child777">
                            <span>Company Reg</span><br />
                            <span>10663197</span><br />
                            <span>VAT Reg</span><br />
                            <span>264115131</span>
                        </div>
                    </div>
                    <div className="parent704">
                        <p className="big777">FOLLOW US</p>
                        <p className="small777">Don't forget to follow our news, updates and activities.</p>
                        <div className="parent705">
                            <a href=""><img src={fb} alt="" className="img777"/></a>
                            <a href=""><img src={x} alt="" className="img777"/></a>
                            <a href=""><img src={yt} alt="" className="img777"/></a>
                            <a href=""><img src={google} alt="" className="img777"/></a>
                            <a href=""><img src={ig} alt="" className="img777"/></a>
                            <a href=""><img src={link} alt="" className="img777"/></a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

        </>
    )
}

export default Footer