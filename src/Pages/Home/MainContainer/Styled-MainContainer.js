import styled, { keyframes } from "styled-components";


const animaButton = keyframes`
     0%{
          box-shadow: 1px 1px 35px red;  
          transition: 0.5s all;
 
     }
     50%{
          box-shadow: 1px 1px 35px white;
          transition: 0.5s all;
     }

     100%{
          box-shadow: 1px 1px 35px red;  
          transition: 0.5s all;
     }

`;

export const StyledMainContainer = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 80vh !important;
    margin-top: 12vh;
    color: white;
    flex-direction: column;
    font-family: 'Oswald', sans-serif;

    .gradiente{
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgba(0,0,0,.3) 0%, rgba(0,0,0,.3) 100%);
        flex-direction: column;


        .logo{
            width: 200px;
            height: 200px;
            background-color: lightgray;
            background-size: cover;
            border-radius: 100%;
            margin-top: -100px;
            box-shadow: 1px 1px 30px 1px white;
        }

        .legenda{
            margin-top: 20px;
            width: 80%;
            text-align: center;
            font-size: 1em;
            text-shadow: 1px 1px 1px black;
            flex-direction: column;
        }

        a{
            width: 250px;
            height: 35px;
            margin-top: 20px;

            button{
                width: 100%;
                height: 100%;
                background-color: black;
                color: white;
                border-radius: 10px;
                border-color: black;
                box-shadow: 1px 1px 20px white;
                animation: ${animaButton};
                animation-iteration-count: infinite;
                animation-fill-mode: forwards;
                animation-duration: 3s;
                transition: 0.5s all;


            }
        }
    }

@media screen and (max-width: 450px) {
    margin-top: 5vh !important;
    height: 80vh !important;

    background-position-x: -350px !important;
}

@media screen and (max-width: 376px) {
    background-position-x: -380px;
    background-size: cover !important;

    .logo{
        width: 130px !important;
        height: 130px !important;
    }

    .legenda{
        font-size: 0.9em !important;
    }

    a{
        width: 210px !important;
        height: 30px !important;
        font-size: 0.8em !important;
    }
}


`;