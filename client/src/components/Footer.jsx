import React from 'react'
import logo from '../assets/images/logo.png'
import '../styles/footer.scss'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer'>
        <div className="footerMainContainer">
            <div className="footerTopContainer">
                <img src={logo} alt="" />
                <p>Malaysia Experience</p>
            </div>
            <div className="middleContainer">
                <div className="getHelpContainer">
                    <a href='https://direct.lc.chat/16744881/' target='_blank'><p>Chat With Us</p></a>  
                    <a href="tel:+60356124646">
                        <p>Call Us</p>
                    </a>
                    <p><a href="mailto:support@malaysia-experience.com"> Email Us </a></p>
                    <Link to={"/helpcenter"}>
                        <p>Help Center</p>
                    </Link>
                </div>
                <div className="legalContainer">
                    <Link to="/terms"><p>Terms & Conditions</p></Link>
                    <Link to="/privacypolicy"><p>Privacy Policy</p></Link>
                    <Link to="/companydetails">
                        <p>Company Details</p>
                    </Link>
                    <Link to="/admin/login"><p>Admin</p></Link>
                </div>
            </div>
            <div className="icons">
                <BsFacebook />
                <FaXTwitter />
                <BsInstagram />

            </div>
        </div>
    </section>
  )
}

export default Footer