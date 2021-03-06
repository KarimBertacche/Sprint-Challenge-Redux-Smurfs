import React from 'react';
import styled from 'styled-components';

const StylesSmurf = styled.div`
    position: relative;
    width: 300px;
    height: 575px;
    background-color: #9BD2EE;
    border: 3px solid #0076A1;
    border-radius: 20px;
    text-align: center;
    margin: 5px;
    overflow: hidden;

    h2 {
        font-weight: normal;

    }

    span {
        font-weight: bold;
    }

    i {
        position: absolute;
        top: 2%;
        right: 4%;
        font-weight: bold;
        font-size: 1.3rem;
        cursor: pointer;

        &:hover {
            color: #0076A1;
        }
    }

    button {
        background-color: #9BD2EE;
        border: 3px solid #0076A1;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;

        &:hover {
            background-color: #0076A1;
            color: #fff;
        }
    }
`;

function Smurf(props) {
    return (
        <StylesSmurf>
            <i onClick={() => props.deleteSmurfHandler(props.id)}>X</i>
            <img src={props.img} alt={props.names}/>
            <h2>name:<span>{props.name}</span></h2>
            <p>age: <span>{props.age} year old</span></p>
            <p>height: <span>{props.height}cm</span></p>
            <button onClick={() => props.passSmurfHandler({...props})}>Update Smurf</button>
        </StylesSmurf>
    );
}

export default Smurf;

