import React from  "react";
import {Basket} from "../home/styled";
import "./style.css";
import img from "./img/1.png"
import {NavLink} from "react-router-dom";
function Catalog() {
    return(
        <div className={'Container'}>
            <Basket>
                <NavLink to={'/shop'}>
                    <i className="bi bi-basket"> </i>
                </NavLink>
            </Basket>
            <h1 style={{right:'5%'}} className={'navbar-label'}>Каталог</h1>
            <div className="block-1 ">
                <h1> Каталог</h1>
                <div className="catalog-menu">
                    <input id={'one-1'} type="radio" name={'one'}/>
                    <label htmlFor="one-1">
                        <i className="bi bi-brightness-low"> </i>
                         Суши и роллы
                    </label>
                    <input id={'one-2'} type="radio" name={'one'}/>
                    <label htmlFor="one-2">
                        <i className="bi bi-activity"> </i>
                      Пицца
                    </label>
                    <input id={'one-3'} type="radio" name={'one'}/>
                    <label htmlFor="one-3">
                        <i className="bi bi-cloud"> </i>
                        Супы
                    </label>
                    <input id={'one-4'} type="radio" name={'one'}/>
                    <label htmlFor="one-4">
                        <i className="bi bi-cloud-fog"> </i>
                        Салаты и закуски
                    </label>
                    <input id={'one-5'} type="radio" name={'one'}/>
                    <label htmlFor="one-5">
                        <i className="bi bi-cloud-haze"> </i>
                        Горячие блюда
                    </label>
                </div>
               <div className="card-group">
                 <div className="card-item">
                     <img src={img} alt="img"/>
                     <h4>Royal roll</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur
                         adipisicing elit. Esse hic incidunt natus
                         nostrum voluptate!
                     </p>

                     <div className="footer-card">
                        <h4>487 $</h4>
                         <div className="counter">
                             <button>-</button>
                             0
                             <button>+</button>
                         </div>
                     </div>
                 </div>
                   <div className="card-item">
                       <img src={img} alt="img"/>
                       <h4>Royal roll</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Esse hic incidunt natus
                           nostrum voluptate!
                       </p>

                       <div className="footer-card">
                           <h4>487 $</h4>
                           <div className="counter">
                               <button>-</button>
                               0
                               <button>+</button>
                           </div>
                       </div>
                   </div>
                   <div className="card-item">
                       <img src={img} alt="img"/>
                       <h4>Royal roll</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Esse hic incidunt natus
                           nostrum voluptate!
                       </p>

                       <div className="footer-card">
                           <h4>487 $</h4>
                           <div className="counter">
                               <button>-</button>
                               0
                               <button>+</button>
                           </div>
                       </div>
                   </div>
                   <div className="card-item">
                       <img src={img} alt="img"/>
                       <h4>Royal roll</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Esse hic incidunt natus
                           nostrum voluptate!
                       </p>

                       <div className="footer-card">
                           <h4>487 $</h4>
                           <div className="counter">
                               <button>-</button>
                               0
                               <button>+</button>
                           </div>
                       </div>
                   </div>
                   <div className="card-item">
                       <img src={img} alt="img"/>
                       <h4>Royal roll</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Esse hic incidunt natus
                           nostrum voluptate!
                       </p>

                       <div className="footer-card">
                           <h4>487 $</h4>
                           <div className="counter">
                               <button>-</button>
                               0
                               <button>+</button>
                           </div>
                       </div>
                   </div>
                   <div className="card-item">
                       <img src={img} alt="img"/>
                       <h4>Royal roll</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Esse hic incidunt natus
                           nostrum voluptate!
                       </p>

                       <div className="footer-card">
                           <h4>487 $</h4>
                           <div className="counter">
                               <button>-</button>
                               0
                               <button>+</button>
                           </div>
                       </div>
                   </div>
                   <div className="card-item">
                       <img src={img} alt="img"/>
                       <h4>Royal roll</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Esse hic incidunt natus
                           nostrum voluptate!
                       </p>

                       <div className="footer-card">
                           <h4>487 $</h4>
                           <div className="counter">
                               <button>-</button>
                               0
                               <button>+</button>
                           </div>
                       </div>
                   </div>
                   <div className="card-item">
                       <img src={img} alt="img"/>
                       <h4>Royal roll</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Esse hic incidunt natus
                           nostrum voluptate!
                       </p>

                       <div className="footer-card">
                           <h4>487 $</h4>
                           <div className="counter">
                               <button>-</button>
                               0
                               <button>+</button>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )

}
export default Catalog
