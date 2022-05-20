import React from 'react';
import {Basket} from "./styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import {NavLink} from "react-router-dom";
function Home () {
    return(
        <div className={'Container'}>
           <Basket>
               <NavLink to={'/shop'}>
                   <i className="bi bi-basket"> </i>
               </NavLink>
           </Basket>
            <h1 className={'navbar-label'}> Сенпай</h1>
            <Carousel className={'carousel-1'}>
                <div className={'item'}>
                    <img width={'200px'} src="https://www.lifepng.com/wp-content/uploads/2020/11/Sushi-Selection-png-hd.png"  alt={'img'}/>

                </div>
                <div className={'item'}>
                    <img width={'200px'} src="https://avatanplus.com/files/resources/original/581748895cb3a1581af358a4.png" alt={'img'} />

                </div>
                <div className={'item'}>
                    <img width={'200px'} src="https://www.lifepng.com/wp-content/uploads/2020/11/Sushi-Selection-png-hd.png" alt={'img'} />
                </div>
            </Carousel>
        </div>
    )

}

export default Home
