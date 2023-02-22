import React from 'react'
import FooterCard1 from './FooterCard1'
import "./Footer.css"
import {
    ProductCategories,
    SiteInfo,
    ResourcesCenter,
    Policies,
  } from "./FooterDetail";
import FooterCard2 from './FooterCard2';
import FooterCard3 from './FooterCard3';

const Footer = () => {
  return (
    <>
        <div className='footer-contener'>
         <div className='footercard1'>
         <FooterCard1 type={ProductCategories} heading="PRODUCT CATEGORIES" />
        <FooterCard1 type={SiteInfo} heading="SITE INFO" />
        <FooterCard1 type={ResourcesCenter} heading="RESOURCES CENTER" />
        <FooterCard1 type={Policies} heading="POLICIES" />
         </div>
         <br />
         <FooterCard2/>
         <FooterCard3/>
        </div>
    </>
  )
}

export default Footer