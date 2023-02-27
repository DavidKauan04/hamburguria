import styled from "styled-components";

const MainContainer = styled.main`
    width: 100vw;
    height: 150vh;
    padding-top: 1rem;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    /* Responsividade */
    @media screen and (min-width: 700px) {
        padding-top: 2rem;
        height: 110vh;
        align-items: center;
    }

    @media screen and (min-width: 1000px) {
        padding-top: 4rem;
        height: 125vh;
        flex-direction: row;
        align-items: flex-start;
    }

`

export { MainContainer };