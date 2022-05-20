import React from "react";
import {Basket} from "../home/styled";
import "./style.css";
import img from "./img/1.png"
function ShopCard() {

    return(
        <div className={'Container'}>
            <Basket>
                <span>3</span>
                <i className="bi bi-basket"> </i>
            </Basket>
            <div className="block-1">
                <h1 className={'shop-text'}> Корзина(3)</h1>
               <div className="row-card">
                   <img src={img} alt="img"/>
                   <div className="description">
                       <h4>Royal roll</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit.
                           Accusantium aliquam autem esse, eveniet
                           ipsam laborum perferendis quasi quis rerum soluta.
                       </p>
                   </div>
                   <div className="row-counter">
                       <p className={'money'}> Цена <span>487 $</span></p>
                       <div className="counter row-count">
                           <button>-</button>
                           2
                           <button>+</button>
                       </div>
                       <p className={'money'}> Сумма <span>974 $</span></p>
                   </div>
                   <div className="status">
                       <i className="bi bi-trash"> </i>
                   </div>
               </div>
                <div className="row-card">
                    <img src={img} alt="img"/>
                    <div className="description">
                        <h4>Royal roll</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.
                            Accusantium aliquam autem esse, eveniet
                            ipsam laborum perferendis quasi quis rerum soluta.
                        </p>
                    </div>
                    <div className="row-counter">
                        <p className={'money'}> Цена <span>487 $</span></p>
                        <div className="counter row-count">
                            <button>-</button>
                            2
                            <button>+</button>
                        </div>
                        <p className={'money'}> Сумма <span>974 $</span></p>
                    </div>
                    <div className="status">
                        <i className="bi bi-trash"> </i>
                    </div>
                </div>
                <div className="row-card">
                    <img src={img} alt="img"/>
                    <div className="description">
                        <h4>Royal roll</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.
                            Accusantium aliquam autem esse, eveniet
                            ipsam laborum perferendis quasi quis rerum soluta.
                        </p>
                    </div>
                    <div className="row-counter">
                        <p className={'money'}> Цена <span>487 $</span></p>
                        <div className="counter row-count">
                            <button>-</button>
                            2
                            <button>+</button>
                        </div>
                        <p className={'money'}> Сумма <span>974 $</span></p>
                    </div>
                    <div className="status">
                        <i className="bi bi-trash"> </i>
                    </div>
                </div>
                <div className="row-footer">
                    <p>Общая сумма : <span>2 000 $</span></p>
                    <button>Вернуться к покупком</button>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    )

}
export default ShopCard