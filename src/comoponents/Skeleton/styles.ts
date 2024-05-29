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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 60px 0px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin: 40px 0px;
    }
`;

export const MovieArea = styled.div`
    padding: 10px;
    width: 220px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 6px;

    .imgFake {
        width: 100%;
        height: 300px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        animation: ${shimmer} 1.5s infinite linear;
        border-radius: 4px;
    }

    @media (max-width: 750px) {
        width: 150px;

        .imgFake {
            height: 200px;
        }
    }
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin: 10px 0;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    animation: ${shimmer} 1.5s infinite linear;
    border-radius: 4px;
    padding: 10px;
`;
