import React, { Component } from 'react'
import styled from 'styled-components'
import '../Anim.css'
import { BrowserRouter as Router, Switch, Route, Match, Redirect } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import App from './App'
import Main from './Main'
import Labs from './Labs'

const RouterComponent = () =>
 (
   <Router>
      <Route render={({ location }) => (
         <CSSTransitionGroup
         transitionName={location.pathname === '/' ? 'fadeOut' : 'fade'}
         transitionEnterTimeout={1000}
         transitionLeaveTimeout={800}
         >
           <Switch key={location.key} location={location}>
            <Route exact path="/" render={App}/>
            <Route exact path="/main" component={Main}/>
          <Route exact path="/labs" component={Labs}/>
           </Switch>
        </CSSTransitionGroup>
      )}/>
    </Router>
  )


export default RouterComponent
