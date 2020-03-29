import styled from 'styled-components'

export const Screen = styled.div`   
    background: linear-gradient(180deg, #49C2FE -3.19%, rgba(116, 196, 236, 0.6) 96.81%);;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const Content = styled.div`
    display: table-cell;

    span {
        padding: 20px;
    }

    hr {
        background-color: #FFF;
        outline: none;
        border: 1px solid;
        width: 80px;
    }

    .temp_informations {
        display: flex;
        align-items: center;
    }

    .temp_informations div {
        display: table-cell;
        margin-left: 30px;
    }
`

export const Location = styled.h2`
    font: 400 25pt Quicksand, sans-serif;
    text-align: center;
    margin-bottom: 35px;
`

export const Temp = styled.h1`
    font: 300 120pt Quicksand, sans-serif;
`

export const OtherTemp = styled.h3`
    font: 300 20pt Quicksand, sans-serif;
    padding: 7px;
`

export const Description = styled.h4`
    font: 400 25pt Quicksand, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 50px;

    img {
        width: 35px;
        margin-right: 15px;
    }
`

export const Info = styled.h5`
    font: 300 16pt Quicksand, sans-serif;
    margin: 15px 0px;
    display: flex;
    align-items: center;

    img {
        width: 30px;
        margin-right: 15px;
    }
`