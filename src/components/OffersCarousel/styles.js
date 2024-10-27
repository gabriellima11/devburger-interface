import styled from "styled-components";

export const Container = styled.div`
    
    margin-top: 50px;
`

export const Title = styled.h1`
    text-align: center;
    color: #61A120;
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

export const ContainerItems = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 250px;
    border-radius: 30px;
    box-shadow: 0px 4px 50px 0px #00000026;

    img{
        width: 180px;
        height: 130px;
    }

    .name{
        color: #FF8C05;
        font-size: 22px;
        font-weight: 700;
    }

    .price{
        font-size: 22px;
        font-weight: 700;
    }

`
