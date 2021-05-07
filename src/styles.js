import { css } from "styled-components";

export const setColor = {
  accentColor: "#8FCEE0",
  mainWhite: "#E7E8E2",
  mainBlack: "#222",
  mainGrey: "#91918D",
  lightGrey: "#C6C7C1",
};

export const setFont = {
  main: "'Roboto', sans-serif;",
  slanted: "'Lato', sans-serif;",
};


export const setFlex = ({x="center",y="center"}={})=> {
    return `display:flex;align-items:${y};justify-content:${x}`
}

export const setBackground = ({
    img="https://images.pexels.com/photos/4566721/pexels-photo-4566721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    color="rgba(0,0,0,0)"
}={}) => {
    return `background: linear-gradient(${color}, ${color}),url(${img}) center / cover fixed no-repeat`;
}

export const setRem = (number = 16) => {
  return`${number/16}rem`
}

export const setLetterSpacing = (number = 1) => {
  return`letter-spacing:${number}px`
}

export const setBorder = ({size="3px", style="solid", color="${setColor(accentColor)}"}={})=>{
  return`border:${size} ${style} ${color}`
}

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, label)=>{
  acc[label] = (...args)=>css`
  @media (min-width: ${sizes[label] / 16}em) {
    ${css(...args)}
  }
  `
  return acc
}, {});

export const setTransition = ({property="all", time="0.3s", timing="ease-in-out"}={}) => {
return`transition:${property} ${time} ${timing}`
}


export const setShadow = {
  light:"box-shadow: 1px 2px 2px 2px rgba(0,0,0,0.46)",
  dark:"box-shadow: 3px 4.5px 3px 2px rgba(0,0,0,0.46)",
  darkest: "box-shadow: 6px 9px 6px 4px rgba(0,0,0,0.46)"
}