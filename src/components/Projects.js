import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

import Boathouse from '../img/BoathouseCard.jpg'
import Ergie from '../img/ergie.jpg'
import fourohfour from '../img/404.jpg'
import Alice from '../img/alice.jpg'

const Outer = styled.section`
width: 100%; min-height: 100vh; position: relative; background-color: ${props => props.color}; z-index: 99; padding: 7.5% 7.5% 12.5%;  box-sizing: border-box;
display: flex; flex-wrap: wrap; align-items: flex-end;
`
const Cube = styled.section`
  width: calc(25% - 30px); margin: 15px; height: auto; transition: 0.2s ease-in; position: relative;
  @media (max-width: 1200px) {
  width: calc(50% - 30px);
  }
  @media (max-width: 900px) {
  width: calc(100% - 30px);
  }
  &:nth-child(1){
    animation-delay: 0.1s;
  }
  &:nth-child(2){
    animation-delay: 0.2s;
  }
  &:nth-child(3){
    animation-delay: 0.3s;
  }
  &:nth-child(4){
    animation-delay: 0.4s;
  }
  &:hover{
    padding-bottom: 50px;
    z-index: -1;
  }
`
const CubeImage = styled.img`
  width: 100%;
`

const LearnMore = styled.section`
  height: 50px; background-color: black; width: 100%; position: absolute; bottom: 10px; z-index: -1; text-align: center;
  p{
    color: white; font-weight: 900;
  }
`

export default class projects extends Component {
  constructor() {
   super()
   this.state = {
     user: null
   }
 }

LearnMore(){
  console.log('learn')
}

render() {
  var portfolioItem = [
     {
       'name' : 'The Gamekeeper',
       'img' : Boathouse
     },
     {
       'name' : 'Farnham Farmhouse',
       'img' : Ergie
     },
     {
       'name' : '404',
       'img' : fourohfour
     },
     {
       'name' : '404',
       'img' : Alice
     }
   ]
  let cube = portfolioItem.map(result =>
    <Cube className='NewCube animated boxIn'>
      <CubeImage src={result.img}></CubeImage>
    <LearnMore onClick={() => this.LearnMore()}><p>Learn More ></p></LearnMore>
    </Cube>
  )
    return (
      <Outer color={'rgba(218, 112, 55, 0.00)'}>
        {cube}
      </Outer>
    );
  }
}
