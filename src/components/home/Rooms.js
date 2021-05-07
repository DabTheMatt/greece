import React from "react";
import Room from "./Room";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
import roomsData from "../../rooms-data";
import { setColor, media, setBorder, setRem } from "../../styles";

export default class Rooms extends React.Component {
    state={
        rooms: roomsData
    };
    render () {
        return (
            <Section color={setColor.lightGrey}>
                <Title title="Our rooms" center/>
                <RoomsCenter>
                    {this.state.rooms.map(room => {
                        return (
                            <Room key={room.id} room={room}/>
                        )
                    })}
                </RoomsCenter>
            </Section>
        )
    }
}

const RoomsCenter = styled.div`
width: 90vw;
margin:0 auto;
${media.large`
width: 100vw;
max-width: 1170px;
`};
display: grid;
grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
grid-column-gap:${setRem(45)};

/* ${media.tablet`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: ${setRem(32)};
`};

${media.large`
grid-template-columns: repeat(3, 1fr);

`};
*/

`; 