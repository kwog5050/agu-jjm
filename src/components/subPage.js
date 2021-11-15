import React, { useState, lazy, Suspense } from "react";
import { Link, Route, Switch } from "react-router";

import "../sass/subPage.scss";
let Brand = lazy(() => { return import('./brand.js') });
let Menu = lazy(() => { return import('./menu.js') });
let Loction = lazy(() => { return import('./loction.js') });
let Startups = lazy(() => { return import('./startups.js') });
let Company = lazy(() => { return import('./company.js') });




function SubPage(props) {

  let [suspenseStyle, setSuspenseStyle] = useState({
    textAlign: "center",
    padding: "200px 0px",
    backgroundColor: "#fff7f0"
  })

  return (
    <div>
      {props.SubBanner()}
      
      <Switch>
        <Route path="/Brand">
          <Suspense fallback={<div style={ suspenseStyle }><img src="/img/loding.gif" alt="" /></div>}>
            <Brand></Brand>
          </Suspense>
        </Route>

        <Route path="/Menu">
          <Suspense fallback={<div style={ suspenseStyle }><img src="/img/loding.gif" alt="" /></div>}>
            <Menu></Menu>
          </Suspense>
        </Route>

        <Route path="/Loction">
          <Suspense fallback={<div style={ suspenseStyle }><img src="/img/loding.gif" alt="" /></div>}>
            <Loction></Loction>
          </Suspense>
        </Route>

        <Route path="/Startups">
          <Suspense fallback={<div style={ suspenseStyle }><img src="/img/loding.gif" alt="" /></div>}>
            <Startups Avg={props.Avg} Review={props.Review} Gallery={props.Gallery}></Startups>
          </Suspense>
        </Route>

        <Route path="/Company">
          <Suspense fallback={<div style={ suspenseStyle }><img src="/img/loding.gif" alt="" /></div>}>
            <Company></Company>
          </Suspense>
        </Route>
      </Switch>
    </div>
  )
}

export default SubPage;