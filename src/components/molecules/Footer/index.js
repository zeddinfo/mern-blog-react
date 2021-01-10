import React from 'react'
import { ICFacebook, ICGithub, ICInstagram, ICLinkedin, LogoGreen } from '../../../assets'
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoGreen} alt="logo"/>
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook}/>
                    <Icon img={ICLinkedin}/>
                    <Icon img={ICGithub}/>
                    <Icon img={ICInstagram}/>    
                    {/* <img src={ICFacebook} alt="facebook"/>
                    <img src={ICLinkedin} alt="linkedin"/>
                    <img src={ICGithub} alt="github"/>
                    <img src={ICInstagram} alt="instagram"/> */}
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
