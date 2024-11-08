import styled from "styled-components";

import CartBanner from '../../assets/texture.svg';
import Background from '../../assets/background.svg'

export const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    background: url(${Background});
    background-size: cover;

`

export const Banner = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    background: url(${CartBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 240px;
    }
`

export const Title = styled.h1`
    color: #61A120;
    text-align: center;
    font-size: 40px;
    position: relative;
    padding-bottom: 12px;
    margin: 40px 0;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: #9758A6;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 29%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`