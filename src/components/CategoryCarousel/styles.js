import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.main`
    padding-left: 20px;

    .carousel-item{
        padding-right: 40px;
    }
`

export const Title = styled.h1`
    color: #9758A6;
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
        background-color: #9758A6;
    }
`

export const ContainerItems = styled.div`
    background: url(${props => props.imageUrl});
    background-position: center;
    background-size: cover;
    
    display: flex;
    height: 300px;
    width: 100%;
    align-items: center;
    border-radius: 20px;
`

export const LinkCategory = styled(Link)`
    color: #fff;
    font-size: 25px;
    font-weight: 800;
    background-color: rgba(0,0,0,0.5);
    padding: 5px 20px;
    border-radius: 30px;
    margin: 100px 0 0 20px;
    text-decoration: none;

    &:hover{
        background-color: #9758A6;
    }
`