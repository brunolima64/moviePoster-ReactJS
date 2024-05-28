import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MovieArea = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 6px;
`;

export const Title = styled.h1`
    margin: 25px 0px;
`;

export const InfoArea = styled.div`
    margin-bottom: 30px;
`;

export const infoP = styled.div`
    margin: 15px 0px;
    font-size: 20px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px 10px;
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
