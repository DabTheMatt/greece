import React from "react";
import styled from "styled-components";
import {
  setRem,
  setColor,
  setLetterSpacing,
  setShadow,
  setBorder,
  setTransition,
} from "../../styles";
import { SmallBtn } from "../globals/Buttons";
import PropTypes from "prop-types";

const Room = ({ className, room }) => {
  const { img = "", title = "", info = "", price = "" } = room;
  return (
    <article className={className}>
      <div className="imageWrapper">
        <img src={img} alt="single room" />
        <div className="price">${price}</div>
        <div className="roomInfo">
            <h4>{title}</h4>
            <p>{info}</p>
        </div>
      </div>
      <SmallBtn>Hello </SmallBtn>
    </article>
  );
};

export default styled(Room)`
background: ${setColor.mainWhite};
margin:${setRem(32)} 0;
.imageWrapper {
    background: ${setColor.mainWhite};
    position: relative;
    img{
        width:100%;
        display:block;
        ${setTransition()}
    }
&:hover img {
    opacity: 0.5;
}
    .price{
        color: ${setColor.mainBlack};
        position:absolute;
        top: 50%;
        left:50%;
        transform:translate(-50%, -150%);
        ${setLetterSpacing(3)};
        font-size: ${setRem(30)};
        padding:${setRem(10)} ${setRem(33)};
        ${setBorder({color:setColor.mainBlack})};
        opacity: 0;
        ${setTransition()};

    }
    &:hover .price{
        opacity: 1;
    }
}
.roomInfo {
    padding: 0 ${setRem()} ${setRem()} ${setRem()};
    h4{
        text-transform:capitalize;
        ${setLetterSpacing()};
    }
    p{
        ${setLetterSpacing()}
    }
}

${setShadow.darkest};
${setTransition()};
&:hover{
    ${setShadow.light}
}
`;

Room.propType = {
    room:PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
    })
}
