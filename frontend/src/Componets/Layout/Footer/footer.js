import React from 'react'
import {Link} from 'react-router-dom'

// ASSETS IMPORTS (ICONS)
import FacebookIcon from '../../../Assets/facebook.svg'
import GoogleIcon from '../../../Assets/googleplus.svg'
import TwitterIcon from '../../../Assets/twitter.svg'
import InstagramIcon from '../../../Assets/instagram.svg'

// STYLED IMPORTS
import {
    FooterContainer, 
    FooterLinks, 
    InfoLinks, 
    SocialLinks, 
    SocialIcons, 
    Signature
} from "../Footer/footer.styled";

const Footer = () => {

return (
    <div>
        <FooterContainer>
            <FooterLinks>
                <InfoLinks>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/press'>Press</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/ios'>IOS</Link>
                    <Link to='/android'>Android</Link>

                </InfoLinks>
                <SocialLinks >
                    <SocialIcons src={FacebookIcon} alt='facebook' />
                    <SocialIcons src={TwitterIcon} alt='twitter' />
                    <SocialIcons src={GoogleIcon} alt='google' />
                    <SocialIcons src={InstagramIcon} alt='instagram' />
                </SocialLinks>
            </FooterLinks>
            <Signature>&copy; Copyright Luna 2018</Signature>
        </FooterContainer>
   
    </div>
  )
}

export default Footer