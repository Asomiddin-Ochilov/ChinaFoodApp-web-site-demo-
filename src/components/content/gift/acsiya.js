import React from "react";
import {Basket} from "../home/styled";
import "./style.css";
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import {NavLink} from "react-router-dom";
function Action() {
    return(
        <div className={'Container'}>
            <Basket>
                <NavLink to={'/shop'}>
                    <i className="bi bi-basket"> </i>
                </NavLink>
            </Basket>
            <h1 style={{right:'10%'}} className={'navbar-label'}>Акции</h1>
            <div className="block-1 ">
                <h1> Акции</h1>
                <div className="card-group">
                  <div className="card">
                      <div className="card-header">
                          <h2>Lorem ipsum dolor sit amet, consectetur </h2>

                          <h4> 245 г</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.
                              Delectus distinctio facere necessitatibus
                              pariatur perferendis provident quibusdam saepe
                              tenetur veritatis voluptatum.
                          </p>
                      </div>
                      <img src={img1} alt="img1"/>
                  </div>
                    <div className="card">
                        <img src={img2} alt="img2"/>
                        <div className="card-header">
                            <h2>Lorem ipsum dolor sit amet, consectetur </h2>

                            <h4> 245 г</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                                Delectus distinctio facere necessitatibus
                                pariatur perferendis provident quibusdam saepe
                                tenetur veritatis voluptatum.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h2>Lorem ipsum dolor sit amet, consectetur </h2>

                            <h4> 245 г</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                                Delectus distinctio facere necessitatibus
                                pariatur perferendis provident quibusdam saepe
                                tenetur veritatis voluptatum.
                            </p>
                        </div>
                        <img src={img1} alt="img3"/>
                    </div>
                    <div className="card">
                        <img src={img2} alt="img3"/>
                        <div className="card-header">
                            <h2>Lorem ipsum dolor sit amet, consectetur </h2>

                            <h4> 245 г</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                                Delectus distinctio facere necessitatibus
                                pariatur perferendis provident quibusdam saepe
                                tenetur veritatis voluptatum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Action