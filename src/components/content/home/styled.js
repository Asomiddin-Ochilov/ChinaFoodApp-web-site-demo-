import styled from "styled-components"

export const Basket = styled.div`
width: 70px;
position: relative; 
position: absolute;
right: 3rem;
top: 2rem;
background-color: rgb(253,92,6);
height:70px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: 50%;
z-index: 1;
i{
color: white;
font-size: 35px;
}
span{
background-color: white;
position:absolute;
width: 20px;
font-size: 13px;
color:rgb(253,92,6) ;
height: 20px;
display: flex;
align-content: center;
justify-content: center;
padding-top: 2px;
border-radius: 50%;
left: 0;
top: 0;
}
`
