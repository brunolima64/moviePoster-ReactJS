import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Movies = styled.div`
    min-height: calc(100vh - 25vh);// para posicionar o footer.
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

export const HaveNotMovie = styled.p`
    padding: 10px;
    font-size: 17px;
`;