import styled from "styled-components"

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 275px;
    gap: 20px;
    padding: 20px;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0px 4px 50px 0px #00000026;
    position: relative;

    div{
        margin-top: 40px;
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

export const Image = styled.img`
    width: 130px;
    position: absolute;
    top: -20%;
`
