import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

const Outer = styled.section`
width: 100%; min-height: 100vh; position: absolute; top: 0; left: 0; background-color: ${props => props.color}; z-index: 99; padding: 0;  box-sizing: border-box;
display: flex; flex-wrap: wrap; text-align: center;
h1{
  font-size: 4em; margin: 0 auto;
}
`
const LinkRight = styled.section`
width: 50px; height: 50px; background-color: #F2EA1E; position: fixed; top: 90vh; left: 30px; z-index: 399;
span{margin-left: 3px}
@media (max-width: 992px) {
  top: 30px
}
`

 class Labs extends Component {
  constructor() {
   super()
   this.state = {
     user: null
   }
 }

 rightClick(){
     this.props.history.push('/')
 }

render() {

    return (
      <Outer color={'rgba(255, 255, 255, 1)'}>
        <h1>Labs</h1>
        <LinkRight onClick={() => this.rightClick()}><i className="material-icons">arrow_back</i><i className="material-icons">home</i><span>Home</span></LinkRight>

      </Outer>
    );
  }
}

export default withRouter(Labs);
