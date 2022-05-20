import React from "react" ;
import "../home/style.css";
import {Basket} from "../home/styled";
import "./style.css";
import img from "./img/1.png"
import {NavLink} from "react-router-dom";
function About() {

    return(
        <div className={'Container'}>
            <Basket>
                <NavLink to={'/shop'}>
                    <i className="bi bi-basket"> </i>
                </NavLink>
            </Basket>
            <h1 style={{right:'12%'}} className={'navbar-label'}>О нас</h1>

            <div className="block">
                <h1> О нас</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maiores nostrum repellat voluptas?
                </p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Amet architecto deleniti hic, modi odit quae reiciendis
                   repellendus totam veritatis voluptatem.
               </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Amet architecto deleniti hic, modi odit quae reiciendis
                   repellendus totam veritatis voluptatem.
               </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur enim est, ex expedita iusto odit perferendis!
                </p>
            </div>
            <img className={'about-img'} src={img} alt="img"/>
        </div>
    )

}
export default About

