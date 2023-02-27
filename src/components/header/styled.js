import styled from "styled-components";

export const Cabecalho = styled.div`
    padding-right: 5px;
    padding-left: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--gray-0);
    gap: 10px;

    h1 {
        font-size: 2.7rem;
        font-weight: 600;
    }

    span {
        font-size: 1.6rem;
        color: rgba(235, 87, 87, 1);
    }

    form {
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 2px solid #e0e0e0;
        border-radius: 5px;
        background-color: #fff;
    }

    input {
        border-bottom: 1px solid black;
    }

    /* Responsividade */
    @media screen and (min-width: 700px) {
        flex-direction: row;
        justify-content: space-around;

        form {
            width: 45%;
            padding: 1rem;
            display: flex;
            flex-direction: row;
            border: 2px solid #e0e0e0;
            border-radius: 5px;
            background-color: #fff;
        }

        input {
            border: none;
        }
    }
    
    @media screen and (min-width: 1000px) {
        align-items: center;
        justify-content: space-between;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 2rem;
        padding-left: 2rem;

        form {
            width: 31%;
            justify-content: space-around;
        }
    
    }

    @media screen and (min-width: 1400px) {
    }
` 