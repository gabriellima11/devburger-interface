import styled from "styled-components";

import Background from '../../assets/background.svg'


export const Banner = styled.div`
    width: 100%;
    position: relative;

    img{
        width: 100%;
        background-position: center;
    }

    h1{
        position: absolute;
        top: 10%;
        right: 20%;
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        font-weight: 400;
        color: #fff
    }
`

export const Container = styled.section`
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${Background});
    background-size: cover;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
`

export const Content = styled.div`
`
