import styled from "styled-components";

type MoviesProps = {
    loadingSearch: boolean;
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Movies = styled.div<MoviesProps>`
    opacity:  ${props => props.loadingSearch ? .4 : 1};;
    min-height: calc(100vh - 25vh);// para posicionar o footer.
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 60px 0px;
`;

export const HaveNotMovie = styled.p`
    padding: 10px;
    font-size: 17px;
`;