import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
import { setRem, setBorder, setColor, setLetterSpacing, media } from "../../styles";
import { PrimaryBtn, PrimaryButton } from "../globals/Buttons";
import styled from "styled-components";

const About = () => {
    return (
        <Section>
            <AboutCenter>
                <div className="aboutBcg">
                    <img src={aboutBcg} alt="about us"/>
                </div>
                <div className="aboutInfo">
                    <Title title="Hello Guest"/>
                    <p>Greece is considered the cradle of Western civilization, being the birthplace of democracy, Western philosophy, Western literature, historiography, political science, major scientific and mathematical principles, Western drama and the Olympic Games.
                    </p>
                <PrimaryBtn>read more</PrimaryBtn>
                </div>
            </AboutCenter>
        </Section>
    )
};

const AboutCenter = styled.div`
.aboutBcg, .aboutInfo {
    padding:${setRem(30)};
}
.aboutBcg{
    img{
        width:100%;
        display:block;
        ${setBorder({size:setRem(6), color: setColor.accentColor})}
    }
}
.aboutInfo {
    p{
        ${setLetterSpacing(3)};
    }
}
width: 90vw;
margin: 0 auto;
${media.large`
.aboutBcg, .aboutInfo {
    padding:${setRem(0)};
}
width:100vw;
max-width:1170px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: ${setRem(18)};
.aboutBcg, .aboutInfo {
    align-self:center;
}
.aboutInfo{
    p{
        width:80%;
    }
}

`}

`;

export default About;