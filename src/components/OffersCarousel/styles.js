import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
    margin-top: 50px;
    margin-left: 80px;

    .carousel-item{
        padding-right: 40px;
    }

    .react-multi-carousel-list{
        overflow: visible;
    }
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

