import React from "react";
import Hero from "../globals/Hero";
import aboutImg from "../../images/aboutBcg.jpeg";
import homeImg from "../../images/homeBcg.jpeg";
import BannerWrapper from "../globals/Banner";
import {PrimaryBtn} from "../globals/Buttons";


const Header = () => {
    return (
    
        <Hero img={homeImg}>
            <BannerWrapper 
            greetings="welcome to"
            title="Hello from Greece"
            text="Greece (Greek: Ελλάδα, Elláda, [eˈlaða]), officially the Hellenic Republic,[12][b] is a country located in Southeast Europe. Its population is approximately 10.7 million .">
                <PrimaryBtn t="1.5rem">
                    view details
                </PrimaryBtn>
               {/* <PrimaryBtn as="a" href="http://google.com" t="1.5rem">
                    view details
                </PrimaryBtn>*/}
            </BannerWrapper>
            
            
        </Hero>
    
    )
}

export default Header