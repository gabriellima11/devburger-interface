import styled from "styled-components";

export const Image = styled.img`
    width: 150px;
    background-color: #F3F3F3;
    border-radius: 10px;
    padding: 10px 0;
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    button{
        background-color: #9758A6;
        color: #fff;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        width: 32px;
        height: 32px;
    }
`

export const EmptyCart = styled.div`
    padding: 20px;
    font-size: 20px;

`

export const TrashIcon = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`