import styled from "styled-components";

export const CardapioCategoriasContainer = styled.div`
    width: 100%;
    min-height: 500px;
    justify-content: flex-start;
    font-family: 'Oswald', sans-serif;
    flex-direction: column;

    .modalAdicionaisOFF{
        display: none;
    }

    .modalAdicionaisON{
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100vw;
        top: 0;
        height: 100vh;
        z-index: 6;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
    }

    .espacoBotton{
        width: 100%;
        height: 15vh;
    }

    


`;