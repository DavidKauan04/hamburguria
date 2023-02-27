import styled from "styled-components";

const Cart = styled.div`
    width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #F5F5F5;
    border-radius: 5px;
    padding-bottom: 1rem;

    /* Responsividade */
    @media screen and (min-width: 700px) {
        width: 70%;
    }

    @media screen and (min-width: 1000px) {
        width: 58%;
    }

    @media screen and (min-width: 1000px) {
        margin-right: 1.5rem;
        height: 35rem;
    }
`

const TitleCart = styled.div`
    background-color: var(--color-primary);
    border-radius: 8px 8px 0px 0px;
    width: 100%;
    height: 3.5rem;
    color: #FFF;
    padding: 1rem;
    `

const Products = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        width: 100%;
        height: 100%;
    }

    .liCart {
        width: 100%;
        height: 5rem;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 1.6rem;
        animation: move 1.5s;

        img {
            width: 7rem;
        }

        div {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 1rem;

            p {
                font-size: 1.6rem;
                font-weight: 600;
            }

            span {
                font-size: 1rem;
                font-weight: 600;
                color: var(--gray-50);
            }
        }

        button {
            display: flex;
            justify-content: center;
            padding: 0.3rem;
        }

        @keyframes move {
            from {
                opacity: 0;
                transform: translateX(-40%);
            }
            to {
                opacity: 1;
                transform: translateX(0%);
            }
        }

        @media screen and (max-width: 376px) {
            width: 90%;
            height: 3.4rem;
            list-style: none;
            display: flex;
            align-items: center;
            gap: 1.6rem;
            justify-content: space-around;

            img {
                width: 4rem;
            }

            div {
                p {
                    font-size: 1rem;
                }
            }

            span{
                display: none;
            }
        }
    }

`

const PriceAndRemove = styled.div`
    border-top: 5px solid var(--gray-50);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p{
        font-size: 1.1rem;
        font-weight: 600;
    }

    span {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--gray-50);
    }

    button {
        width: 18rem;
        background-color: #e0e0e0;
        color: #828282;
        font-weight: 600;
        padding: 1rem;
    }

    @media screen and (min-width: 700px) {
        padding-top: 1rem;

        p{
            font-size: 1.7rem;
            font-weight: 600;
        }

        span {
            font-size: 1.7rem;
            font-weight: 600;
            color: var(--gray-50);
        }
    }
`

export { Cart, TitleCart, Products, PriceAndRemove };