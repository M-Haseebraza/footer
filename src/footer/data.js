import React from 'react';
import './footer.css'
export default function Data() {
    return (
        <div className='data-main'>
            <div className='first'>
                <h1>
                    Encodix
                </h1>
                <span>
                    Office # 80,First floor,Mediacom trade <br />
                    City,Faisalabad Pakistan
                </span>
                <br />
                <br />
                Phone: +92 123 232232 <br />
                Phone: +93 333 332323 <br />
                Email: contact@enodix.com <br />
                Website:<a style={{color:'darkblue'}} href="#" > Encodix.org</a>
                <div className='icons'>
                    <div className='top-icons'>
                        <div className="fb"> <img src="pngfind.com-facebook-icon-white-png-1744532.png"/></div>
                        <div className="fb"></div>
                        <div className="fb"></div>
                    </div>
                    <div className='botom-icons'>
                        <div className="fb"><img src="pngfind.com-facebook-icon-white-png-1744532.png"/></div>
                        <div className="fb"></div>
                        <div className="fb"></div>
                        <div className="fb"></div>
                    </div>

                </div>


            </div>
            <div className='secnd'>
                <h2>
                    Usefull Links
                </h2>
                <ul>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Team</a>
                    </li>
                    <li>
                        <a href="#">Carrier</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='third'>
                <h2>
                    Our Service
                </h2>
                <ul>
                    <li>
                        Decentralised Exchange

                    </li>
                    <li>
                        Smart Development
                    </li>
                    <li>
                        Decentrized Finance
                    </li>
                    <li>
                        E-Wallet Development
                    </li>
                    <li>
                        Tokenization
                    </li>
                </ul>
            </div>
            <div className='forth'>
                <h2>
                    Why Us
                </h2>
                <ul>
                    <li>Client Satisfaction is my first priority.</li>
                    <li>Provide qality service untill customer get complete Satisfaction.</li>
                    <li>On-Time dilevery</li>
                    <li>Reasonable Cost</li>
                    <li>Money Back Gurrantee</li>
                    <li>Provide Some extra service free</li>
                    <div className="search-box"><input type="text" /><button>Subscribe</button></div>
                    
                    
                </ul>

            </div>

        </div>
    )
}