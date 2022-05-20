import styled from 'styled-components';

export const Container = styled.div`
width: 20%;
height: 100vh;
`
export const Logo = styled.div`
width: 100%;
height: 180px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
    filter: drop-shadow(0 0 0.75rem rgb(253,92,6));
img{
width: 190px;
height:190px;
transform: scale(1.4);
}
`
export const Navlinks = styled.div`
width: 100%;
height: 330px;
padding: 0 15px;
a{
display: flex;
align-items: center;
width: 100%;
padding-left: 30%;
color: white;
text-decoration: none;
transition: 0.5s;
height: 55px;
font-size: 16px;
position: relative;
box-shadow: 0px -15px 19px -12px rgba(251, 251, 251, 0.2);
overflow: hidden;
&::before{
content: "";
position:absolute;
border-radius: 8px;
bottom: 0;
display: block;
left: 0;
border: 1px solid rgba(255,255,255,0.56);
width: 95%;

}
}
.end{
&::before{
border: none;
}
}
.glava{
box-shadow: none;
border-top: none;

}
.actives{
color: rgb(223,95,24);
}

`
