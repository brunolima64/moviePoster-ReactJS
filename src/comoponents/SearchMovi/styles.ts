import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFF;
    border-radius: 6px;
    padding: 6px 10px;

    img {
        width: 30px;
        height: 30px;
        border-right: 1px solid #eee;
        padding: 6px;
    }

    input {
        width: 100%;
        font-size: 14px;
        border: 0;
        outline: none;
        padding: 0 10px;
    }

    @media (max-width: 420px) {
        padding: 5px 5px;

        img {
            width: 25px;
            height: 25px;
        }

        input {
            width: 100%;
            font-size: 14px;
            border: 0;
            outline: none;
            padding: 0 10px;
        }
    }
`;
