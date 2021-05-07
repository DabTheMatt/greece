import styled from "styled-components";
import { setFlex, setBackground, setFa } from "../../styles";

const Hero = styled.header`
min-height:100vh;
${props => setBackground({ img: props.img, color: "rgb(0,0,0, 0.5)"})};

${setFlex()};

 
`;

export default Hero;