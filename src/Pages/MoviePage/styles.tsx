import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MovieArea = styled.div`
    padding: 20px;
    margin: 30px 10px;
    display: flex;
    background-color: #ffffff;
    border-radius: 6px;

    img {
        max-width: 400px;
        height: 650px;
        padding-right: 20px;
        border-radius: 6px;
    }

    @media (max-width: 770px) {
        max-width: 400px;
        display: flex;
        flex-direction: column;

        img {
            padding: 0px;
        }
    }

    @media (max-width: 450px) {
        max-width: 300px;

        img {
            height: auto;
        }
    }
`;

export const Title = styled.h1`
    margin: 25px 0px;

    @media (max-width: 770px) {
        margin: 15px 0px;
        font-size: 25px;
    }

    @media (max-width: 450px) {
        margin: 10px 0px;
        font-size: 20px;
    }
`;

export const InfoArea = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 450px) {
        margin-bottom: 10px;
    }
`;

export const infoP = styled.div`
    margin-bottom: 10px;
    font-size: 20px;

    @media (max-width: 770px) {
        font-size: 17px;
    }

    @media (max-width: 450px) {
        font-size: 15px;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px 10px;
    margin: 15px 0;
    background-color: #81bcf0;
    color: #FFF;
    font-size: 15px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }

    @media (max-width: 450px) {
        padding: 5px 10px;
    }
`;
