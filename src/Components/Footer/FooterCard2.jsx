import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { CiYoutube } from "react-icons/ci";


const FooterCard2 = () => {
  return (
    <>
           <div className='maindiv'>
           <div className="left">
            <div>
            <h1> Follow Us</h1>
            </div>
            <div className='logos'>
            <div className='logo'>
            <AiFillFacebook size="20px" />
            </div>
            <div className='logo'>
            <TfiTwitter size="20px" />
            </div>
        <div className="logo">
        <CiYoutube size="20px" />
        </div>
            </div>
            </div>
            <div className="right">
            <span> EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</span>
            <div className="img-logo">
              <img src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
              alt="Google Play Store" />

              <img  src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
              alt="Apple Store"/>
            </div>
            </div>
           </div>
    </>
  )
}

export default FooterCard2