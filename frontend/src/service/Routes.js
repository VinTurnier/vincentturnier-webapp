import React from "react";
import { Route, Switch } from "react-router-dom";
// import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Page Not found
import NotFound from './NotFound';

import BlogPage from '../container/blog/BlogPage';
import ProjectPage from '../container/project/ProjectPage';
import HomePage from '../container/home/HomePage';

export default function Routes({appProps}) {


  const styleList = {
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center'
}
  return (
    <div style={styleList}>
    <Switch>
      <PublicRoute exact path='/' component={HomePage} appProps={appProps}/>
      <PublicRoute exact path='/blog' component={BlogPage} appProps={appProps}/>
      <PublicRoute exact path='/projects' component={ProjectPage} appProps={appProps}/>
      <Route component={NotFound} />
    </Switch>
    </div>
  );
}