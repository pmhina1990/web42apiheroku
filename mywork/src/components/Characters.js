import React from "react";
import styled from "styled-components"



const myCharacter = (props) => {
    const { people } = props;
    return (
            <StyledChar>
            <div className="container">
                <h1>{people.name} </h1>
                <div className="test">
                
                    <p>Gender: {people.gender} Mass: {people.mass}</p>
                    <p>Eye Color: {people.eye_color}</p>
                    
                    <button>More info</button>
                    
                </div>
                <h2>Birth Year: {people.birth_year}</h2>
            </div>
            </StyledChar>
    )
}


export default myCharacter

const StyledChar = styled.div`
    
    & .container{
        width: 70%;
        margin: 4% auto;
        background-color: black;
        border: 8px solid;
        
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        border-radius: 10px;
        flex-direction: row;
        
    }
    & h1:hover{
        transform: scale(1.2);
        transition: all 0.8s ease-in-out;
        color: ${(pr) => (pr.theme.firstColor)};
        border-radius: 20px;
    }
    & h2:hover{
        transform: scale(1.2);
        transition: all 0.8s ease-in-out;
        color: ${(pr) => (pr.theme.firstColor)};
        border-radius: 20px;
    }
    
    
    p{
        width:90%;
        margin: 0 auto;
        color: ${(pr) => (pr.theme.white)};
        line-height: 25px;
        border-left: 2.5px double ;
        border-right: 2.5px double ;
        
    }
    &
    h1{
        color: ${(pr) => (pr.theme.blue)};
        padding: 10px 0px;
        border: 6px solid;
        border-color: ${(pr) => (pr.theme.green)};
        width: 80%;
        border-radius: 100px;
    }
    h2{
        display:flex;
        justify-content:center;
        align-items:center;
        width:50%;
        border: 6px solid;
        border-color: black;
        background-color: pink;
        padding: 0.5% 1%;
        color: white;
    }`
    
    
    

