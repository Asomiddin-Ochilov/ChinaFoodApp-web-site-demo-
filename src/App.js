import React,{useState} from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import {Switch,Route} from "react-router-dom";
import Home from "./components/content/home/home";
import About from "./components/content/about/about";
import {Container, Index} from "./styled-app/styled";
import Catalog from "./components/content/catalog/catalog";
import Action from "./components/content/gift/acsiya";
import Delivery from "./components/content/ delivery/dostavka";
import Contact from "./components/content/contact/contact";
import ShopCard from "./components/content/sale/sale";
function App() {
    const [bg , setBg] = useState("")
  return (
      <Index bg={bg}>
          <Container bg={bg}  className={'container'}>
              <Sidebar setBg={setBg} />
              <div  className="main">
                  <Switch>
                      <Route path={'/home'}>
                          <Home/>
                      </Route>
                      <Route path={'/about'}>
                          <About/>
                      </Route>
                      <Route path={'/catalog'}>
                          <Catalog/>
                      </Route>
                      <Route path={'/gift'}>
                         <Action/>
                      </Route>
                      <Route path={'/dostavka'}>
                         <Delivery/>
                      </Route>
                      <Route path={'/contact'}>
                        <Contact/>
                      </Route>
                      <Route path={'/shop'}>
                        <ShopCard/>
                      </Route>
                      <Route path={''}>
                          <Home/>
                      </Route>
                  </Switch>
              </div>
          </Container>
      </Index>

  );
}

export default App;
