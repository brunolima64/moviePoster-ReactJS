import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    background-color: #81bcf0;
    height: 80px;

    a {
        text-decoration: none;
    }
`;

export const HeaderArea = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    padding: 0 20px;
`;

export const Logo = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    
`;

export const SearchInputArea = styled.div`
    
    @media (max-width: 352px) {
        width: 170px;
    }
`;
