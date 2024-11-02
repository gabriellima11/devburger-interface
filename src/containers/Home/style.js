import styled from "styled-components";

import Background from '../../assets/background.svg'


export const Banner = styled.div`
    width: 100vw;
    position: relative;

    img{
        width: 100%;
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
    width: 100vw;
    height: 100%;
`

export const Content = styled.div`
`
