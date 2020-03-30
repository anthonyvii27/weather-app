import styled from 'styled-components'
import mountains from './images/mountains.png'

export const Screen = styled.div`   
    background: linear-gradient(131.94deg, rgba(0, 117, 167, 0.96) 19.05%, rgba(147, 39, 123, 0.84) 96.78%), url(${mountains}) no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
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
        justify-content: center;
    }

    .temp_informations div {
        display: table-cell;
        margin-left: 30px;
    }

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin-bottom: 100px;
    }

    input {
        padding: 10px;
        border-radius: 50px;
        outline: none;
        border: none;
    }

    input::placeholder {
        font: 400 12pt Quicksand, sands-serif;
        padding-left: 7px;
        color: #B0B0B0;
    }

    .btn {
        font: 400 12pt Quicksand, sands-serif;
        cursor: pointer;
        background: rgba(147, 39, 123, 0.84);
        border-radius: 50px;
        outline: none;
        border: none;
        margin-left: 10px; 
        padding: 8px 20px;
        color: #FFF;
    }

    .btn:hover {
        background: rgba(147, 39, 123, 0.96) ;
    }    

    .unit {
        font: 400 12pt Quicksand, sands-serif;
        cursor: pointer;
        padding: 7px 20px;
        outline: none;
        border: none;
        background: #FFF;
        border-radius: 50px;
        color: #B0B0B0;
        margin-left: 60px;
    }

    #alert div {
        position: absolute;
        top: 0px;
        padding: 10px;
        background-color: #DA0700;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        text-align: center;
        width: 150px;
        margin-left: -75px;
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

export const Center = styled.div`
    display: flex;
    justify-content: center;
`