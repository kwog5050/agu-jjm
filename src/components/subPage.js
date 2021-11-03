import React from "react";
import { Link, Route, Switch } from "react-router";

import Brand from "./brand.js";
import Menu from "./menu.js";
import Loction from "./loction.js";
import Startups from "./startups.js";
import Company from "./company.js"

import "../sass/subPage.scss";

function SubPage(props) {
  return (
    <div>
      {props.SubBanner()}
      
      <Switch>
        <Route path="/Brand">
          <Brand></Brand>
        </Route>

        <Route path="/Menu">
          <Menu></Menu>
        </Route>

        <Route path="/Loction">
          <Loction></Loction>
        </Route>

        <Route path="/Startups">
          <Startups Avg={props.Avg} Review={props.Review} Gallery={props.Gallery}></Startups>
        </Route>

        <Route path="/Company">
          <Company></Company>
        </Route>
      </Switch>
    </div>
  )
}

export default SubPage;