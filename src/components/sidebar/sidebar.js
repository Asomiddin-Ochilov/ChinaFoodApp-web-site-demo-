import React from "react";
import {Container, Logo, Navlinks} from "./styled";
import {NavLink} from "react-router-dom";
import logo from "./logo/CENTAY-removebg-preview.png"
function Sidebar({setBg}) {

    return(
        <Container>
        <Logo>
            <img src={logo} alt="logo"/>
        </Logo>
           <Navlinks>
            <NavLink onClick={()=>setBg('')} className={'glava'} to={'/home'} activeClassName={'actives'}>
                Главная
            </NavLink>
               <NavLink onClick={()=>setBg('12px')} to={'/about'} activeClassName={'actives'}>
                   О нас
               </NavLink>
               <NavLink onClick={()=>setBg('12px')} to={'/catalog'} activeClassName={'actives'}>
                   Католог
               </NavLink>
               <NavLink onClick={()=>setBg('12px')} to={'/gift'} activeClassName={'actives'}>
                   Акции
               </NavLink>
               <NavLink onClick={()=>setBg('12px')} to={'/dostavka'} activeClassName={'actives'}>
                  Достовка
               </NavLink>
               <NavLink onClick={()=>setBg('12px')} className={'end'} to={'/contact'} activeClassName={'actives'}>
                   Контакты
               </NavLink>
           </Navlinks>
        </Container>
    )

}
export default Sidebar
