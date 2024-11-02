import styled from "styled-components";

import Background from '../../assets/background.svg'

import { Link } from "react-router-dom";

export const Container = styled.main`
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${Background});
`

export const Banner = styled.div`
    width: 100vw;
    position: relative;
    margin-bottom: 20px;

    img{
        width: 100%;
        background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75));
        
    }

    h1{
        text-align: center;
        position: absolute;
        top: 10%;
        right: 20%;
        font-family: 'Road Rage', sans-serif;
        font-size: 90px;
        font-weight: 400;
        color: #fff;

        span{
            display: block;
            font-size: 20px;
        }
    }
    
`

export const BackButton = styled(Link)`
    text-decoration: none;
    margin: 40px;
    background-color: #9758a6;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 30px;

    &:hover{
        background-color: #6f3576;
    }
`

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: #9758a6;
    font-size: 24px;
    font-weight: 600;
    border-bottom: ${props => props.$isActiveCategory ? '3px solid #9758a6' : 'none'};

    &:hover{
        filter: opacity(0.7)
    }
`

export const ContainerItems = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 70px auto 0 auto;
`

