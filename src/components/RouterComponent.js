import React, { Component } from 'react'
import styled from 'styled-components'
import '../Anim.css'
import { BrowserRouter as Router, Switch, Route, Match, Redirect } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import App from './App'
import Main from './Main'

const RouterComponent = () =>
 (
   <Router>
      <Route render={({ location }) => (
         <CSSTransitionGroup
         transitionName={location.pathname === '/main' ? 'fade' : 'fadeOut'}
         transitionEnterTimeout={1000}
         transitionLeaveTimeout={800}
         >
           <Switch key={location.key} location={location}>
            <Route exact path="/" render={App}/>
            <Route exact path="/main" component={Main}/>
           </Switch>
        </CSSTransitionGroup>
      )}/>
    </Router>
  )


export default RouterComponent
