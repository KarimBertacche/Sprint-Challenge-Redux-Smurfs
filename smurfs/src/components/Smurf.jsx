import React from 'react';
import styled from 'styled-components';

const StylesSmurf = styled.div`
    position: relative;
    width: 200px;
    border: 3px solid red;
    border-radius: 20px;
    text-align: center;

    h2 {
        font-weight: normal;

    }

    span {
        font-weight: bold;
    }

    i {
        position: absolute;
        top: 2%;
        right: 2%;
        font-weight: bold;
        cursor: pointer;
    }
`;

function Smurf(props) {
    return (
        <StylesSmurf>
            <i>X</i>
            <h2>name:<span>{props.name}</span></h2>
            <p>age: <span>{props.age} year old</span></p>
            <p>height: <span>{props.height}</span></p>
            <button>Update Smurf</button>
        </StylesSmurf>
    );
}

export default Smurf;