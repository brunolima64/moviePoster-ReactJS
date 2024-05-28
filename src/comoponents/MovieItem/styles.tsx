import styled from "styled-components";

export const Container = styled.div`
    
`;

export const MovieArea = styled.div`
    padding: 10px;
    width: 220px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 6px;

    a {
        margin: auto;
        width: 100%;
    }

`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 20px;
    min-height: 70px;
    margin: 10px 0;
`;

export const Button = styled.button`
    padding: 10px 10px;
    width: 100%;
    background-color: #81bcf0;
    color: #FFF;
    font-size: 15px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`;
