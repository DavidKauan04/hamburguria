import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{

        /* Primary Pallet */
        --color-primary: rgba(39, 174, 96, 1);
        --color-primary-50:  rgba(147, 215, 175, 1);
        --color-secondary: rgba(235, 87, 87, 1);

        /* grey scale palets */
        --gray-100:rgba(51, 51, 51, 1);
        --gray-50: rgba(130, 130, 130, 1);
        --gray-20:rgba(224, 224, 224, 1);
        --gray-0: rgba(245, 245, 245, 1);


        /* feedback */
        --negative: #E60000;
        --warning: #FFCD07;
        --sucess:#168821;
        --information: #155BCB;
        
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body,html{
        width: 100vw;
        height: 100vh;
    }

    body {
        background: #fff;
        color: black;
        -webkit-font-smoothing: antialiased;
        animation: entrar linear 1.5s;
        overflow-x: hidden;
    }

    body, input, button, textarea {
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
    }

    li {
        animation: entrar 1.5s;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    input {
        border: none;
    }

    button {
        background-color: var(--color-primary);
        border-radius: 5px;
        color: #fff;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
    }

    button:hover {
        
        transition: 1s;
        opacity: 0.7;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--color-primary);
        margin: 0.7rem;
        border-radius: 1.6rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.5);
        border-radius: 1.6rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0,0,0,1);
    }

    @keyframes entrar {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
            
        }
    }
`

export default  GlobalStyle



