import React from "react";
import {Basket} from "../home/styled";
import img from "./img/1.png";
import "./style.css"
import instagram from "./img/social-img/instagram.png";
import facebook from "./img/social-img/facebook.png";
import twitter from "./img/social-img/twitter.png";
import youtube from "./img/social-img/youtube.png";
import appStore from "./img/social-img/app-store.png";
import PlayMarket from "./img/social-img/google_play.png";
import {NavLink} from "react-router-dom";
function Contact() {

    return(
        <div className={'Container'}>
            <Basket>
                <NavLink to={'/shop'}>
                    <i className="bi bi-basket"> </i>
                </NavLink>
            </Basket>
            <h1 style={{right:'1%'}} className={'navbar-label'}>Конкакты</h1>
            <div className="block-1 ">
                <h1> Конкакты</h1>
                <div className="block-main">
                    <img className={'map-img'} src={img} alt="img"/>
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
                    <div className="block-item">
                        <i className="bi bi-person-check"> </i>
                        <div className="text">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <img src={instagram} alt="instagram"/>
                        <img src={facebook} alt="facebook"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={youtube} alt="youtube"/>
                        <img className={'app-img'} src={appStore} alt="app-store"/>
                        <img className={'app-img'} src={PlayMarket} alt="play-market"/>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact