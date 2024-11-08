import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 50px;

    *{
        color: #484848;
        font-weight: 500;
    }

    .container-top{
        display: grid;
        align-items: center;
        grid-gap: 40px 40%;
        grid-template-areas: 
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price';

        .title{
            background-color: #484848;
            color: #fff;
            padding: 15px;
            width: 100%;
            text-align: center;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            grid-area: title
        }

        .items{
            grid-area: items;
            padding-left: 20px;
        }

        .items-price{
            padding-right: 20px;
            grid-area: items-price;
        }

        .delivery-tax{
            padding-left: 20px;
            grid-area: delivery-tax;
        }

        .delivery-tax-price{
            padding-right: 20px;
            grid-area: delivery-tax-price;
        }
    }

    .container-bottom{
        display: flex;
        justify-content: space-between;
        font-size: 23px;
        padding: 20px;


        * {
            font-weight: bold;
        }
    }

        
`