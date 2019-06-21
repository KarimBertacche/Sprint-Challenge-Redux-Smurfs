import React from 'react';
import styled from 'styled-components';

const StylesSmurfsForm = styled.form`
    height: 140px;
    border: 3px solid #000;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    input {
        width: 300px;
        height: 30px;
        text-align: center;
        outline: none;
        font-size: 1.2rem;
    }

    button {
        padding: 10px;
        background-color: #0076A1;
        border: 3px solid #fff;
        border-bottom-right-radius: 20px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        cursor: pointer;

        &:hover {
            background-color: #9BD2EE;
            border: 3px solid #333;
            color: #333;
        }
    }

`;

function SmurfsForm(props) {
    return (
        <StylesSmurfsForm onSubmit={props.addSmurfHandler}>
            <input 
                type="text" 
                name="name"
                value={props.name}
                onChange={props.inputChangeHandler}/>
            <input 
                type="number"
                name="age"
                value={props.age}
                onChange={props.inputChangeHandler}
                min="1"
                max="300"/>
            <input 
                type="number"
                name="height"
                value={props.height}
                onChange={props.inputChangeHandler}
                min="1"
                max="10"/>
            <button type="submit">Add smurf</button>
        </StylesSmurfsForm>
    )
}

export default SmurfsForm;