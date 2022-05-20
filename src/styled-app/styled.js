import styled from "styled-components"
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
export const Container = styled.div`
  width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    backdrop-filter: blur(${props=>props.bg});
`
export const Index = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(80deg, rgba(14, 14, 14, 0.75), rgba(9, 7, 7, 0.77)) ,
    url(${props=>props.bg ? img2 :img1});
`