import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    margin-top: 30px;
`

export const Title = styled.h1`

color: #61A120;
    text-align: center;
    font-size: 40px;
    position: relative;
    padding-bottom: 12px;
    margin-bottom: 40px;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: #61A120;
    }
`

export const Text = styled.p`
    margin: 0 auto;
    width: 60%;
    text-align: center;
    font-size: 20px;
`

export const ContainerItems = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;

    .icon{
        cursor: pointer;
        font-size: 100px;
        color: #9758A6;
    }
`