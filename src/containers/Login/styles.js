import styled from "styled-components"

import BackgroundLogin from '../../assets/bg-login.svg'
import Background from '../../assets/background.svg'

import { Link as ReactLink } from "react-router-dom"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 50% 50%;
`

export const LeftContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundLogin});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const RightContainer = styled.div`
    display: flex;
    gap: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    height: 100%;
    background-image: url(${Background});
    background-size: cover;
    background-color:#1e1e1e;
`

export const Title = styled.h2`
    font-family: 'Road Rage', sans-serif;
    text-align: center;
    font-size: 50px;
    font-weight: lighter;
    letter-spacing: 5px;

    span{
        font-family: 'Road Rage', sans-serif;
        color: #9758A6
    }
`

export const Form = styled.form`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction:column;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction:column;
    font-size: 20px;
    width: 100%;

    input{
        border: none;
        font-size: 16px;
        height: 50px;
        border-radius: 5px;
        padding-left: 10px;
    }

    p{
        color: red;
        font-weight: normal;
        height: 10px;
    }
`

export const Text = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #fff;

    a{
        color: #fff;
    }
`

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff
`