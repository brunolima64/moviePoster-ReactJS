import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MovieArea = styled.div`
    padding: 10px;
    width: 315px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 6px;
    
    .imgFake {
        width: 100%;
        height: 500px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        animation: ${shimmer} 1.5s infinite linear;
        border-radius: 4px;
    }
`;

export const Title = styled.h1`
    margin: 15px 0px;
    height: 30px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    animation: ${shimmer} 1.5s infinite linear;
    border-radius: 4px;
`;

export const InfoArea = styled.div`

`;

export const infoP = styled.div`
    height: 30px;
    margin: 15px 0px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    animation: ${shimmer} 1.5s infinite linear;
    border-radius: 4px;
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

