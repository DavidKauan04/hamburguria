import styled from "styled-components";

const ListaBurguer = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    overflow: auto;
    white-space: nowrap;
    gap: 3rem;
    padding-bottom: 1rem;
    

    ::-webkit-scrollbar {
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: var(--gray-20);
        margin: 0rem;
        border-radius: 1.6rem;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-primary);
        border-radius: 1.6rem;
    }

    @media screen and (min-width: 1000px) {
        width: 116%;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        overflow: visible;
        justify-content: center;
        gap: 3rem;
        padding-bottom: 1rem;
    }

    
`

const List = styled.li`
    border: 3px solid var(--gray-50);
    border-radius: 5px;
    width: 300px;
    background-color: #f5f5f5;

    div {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-left: 5px;
        margin-right: 5px;
        padding: 1.5rem;
        border-radius: 5px;
    }

    h3 {
        font-size: 1.6rem;
        font-weight: 700;
    }

    p {
        font-size: 1.1rem;
        color: var(--gray-50);
        font-weight: 400;
    }

    span {
        font-size: 1.4rem;
        font-weight: 600;
        color: #27AE60;
    }

    button {
        width: 9rem;
        font-size: 1rem;
    }

    /* Responsividade */
    @media screen and (min-width: 1000px) {
        border: 3px solid var(--gray-50);
        border-radius: 5px;
        width: 250px;
        background-color: #f5f5f5;

        h3 {
            font-size: 1.6rem;
            font-weight: 700;
        }

        p {
            font-size: 1.1rem;
            color: var(--gray-50);
            font-weight: 400;
        }

        span {
            font-size: 1.4rem;
            font-weight: 600;
            color: #27AE60;
        }

        button {
            padding: 1rem;
            width: 9rem;
            font-size: 1rem;
        }
    }
`

const Imagem = styled.img`
    width: 300px;
    height: 240px;

    @media screen and (min-width: 1000px) {
        width: 250px;
        height: 180px;
    }
`

export { ListaBurguer, List, Imagem };