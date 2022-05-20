import React from "react";
import {Basket} from "../home/styled";
import "./style.css"
import img from "./img/1.png"
import {NavLink} from "react-router-dom";
function Delivery() {
       return(
           <div className={'Container'}>
               <Basket>
                   <NavLink to={'/shop'}>
                       <i className="bi bi-basket"> </i>
                   </NavLink>
               </Basket>
               <h1 style={{right:'1%'}} className={'navbar-label'}>Доставка</h1>
               <div className="block-1">
                   <h1> Доставка</h1>
                <div className="block-main">
                    <img src={img} alt="img"/>
                   <h2>Как сделать заказ</h2>
                    <div className="block-item">
                        <i className="bi bi-phone"> </i>
                        <div className="text">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div className="block-item">
                        <i className="bi bi-globe"> </i>
                        <div className="text">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div className="block-item">
                        <i className="bi bi-telephone"> </i>
                        <div className="text">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <h2>Как получить заказ</h2>
                    <div className="block-item">
                        <i className="bi bi-person-check"> </i>
                        <div className="text">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div className="block-item">
                        <i className="bi bi-clock"> </i>
                        <div className="text">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div className="block-item">
                        <i className="bi bi-person-plus"> </i>
                        <div className="text">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                </div>
               </div>
           </div>
       )
}
export default Delivery