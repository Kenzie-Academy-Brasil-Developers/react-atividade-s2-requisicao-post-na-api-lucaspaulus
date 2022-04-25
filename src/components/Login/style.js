import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 350px;
    background-image: linear-gradient(90deg, #cd0000, #2c0202);
    box-shadow: 4px 4px 10px 0px #cd000091, -4px -4px 10px 0px #520000b3;
    border-radius: 20px;
    
    button{
        width: 185px;
        height: 40px;
        border-radius: 50px;
        border: 2px solid transparent;
        font-size: 25px;
        color: #e5cece;
        font-family: "Roboto",sans-serif;
        font-weight: 700;
        background-color: #2d0202;
        margin-bottom: 15px;
        &:hover{
            border: 2px solid #ffffff;
            background-color: #7d0101;
        }
    }

`
export const Form__Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    input{
        border: none;
        border-radius: 15px;
        margin-bottom: 24px;
        padding: 8px;
        outline: none;
        border: 2px solid transparent;

        &:focus{
            border: 2px solid #2f0101;
        }
    }


`

