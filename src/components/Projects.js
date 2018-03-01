import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

import Screen from '../img/screen.png'
import Screen2 from '../img/screen2.png'
import water from '../img/water-min.jpg'
import flowers from '../img/flowers-min.jpg'
import pixel from '../img/PixelArt4-min.jpg'
import ergie from '../img/ergie-background-min.jpg'

import aliceScreen from '../img/alice-screen-min.png'
import rowsquadScreen from '../img/rowsquad-screen-min.png'
import myboathouseScreen from '../img/myboathouse-screen-min.png'

import Mask from './ProjectMask.js'


export default class projects extends Component {
  constructor() {
   super()
   this.state = {
     user: null,
     toggled: false
   }
 }

openFull(result){
  console.log(result);
  this.setState({
    toggled: true,
    currentFull: result,
    closeMask: false
  })
}

closeMask(){
  console.log('close');
  this.setState({
    toggled: false,
    closeMask: true
  })
}

render() {
  var portfolioItem = [
     {
       'name' : 'MyBoathouse',
       'description': 'Classifieds/Social Network application',
       'screen' : myboathouseScreen,
       'background' : 'https://images.unsplash.com/photo-1478510862486-5da2c60876d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17e372c3195cb9fd4e330c45535a22ea&auto=format&fit=crop&w=1350&q=80'
     },
     {
       'name' : 'RowSquad',
       'description': 'Training and analytics application',
       'screen' : rowsquadScreen,
       'background' : 'https://images.unsplash.com/photo-1519505645104-c7be90e0d630?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dc1218d263adacfa712911a7199b14f&auto=format&fit=crop&w=1350&q=80'
     },
     {
       'name' : 'Alice Benham',
       'description': 'Inbound marketing website',
       'screen' : aliceScreen,
       'background' : 'http://alicebenham.co.uk/wp-content/uploads/2017/07/computer.jpg'
     },
     {
       'name' : '3Mojis',
       'description': 'Creative writing app/mobile app',
       'screen' : Screen2,
       'background' : 'http://pixeljoint.com/files/icons/full/grass__r1209392301.png'
     }
   ]
  let cube = portfolioItem.map(result =>
    <Cube key={result.name} onClick={() => this.openFull(result)} className='NewCube animated boxIn'>
      <CubeOverlay className='CubeOverlay'>
        <section className='OverlayButton'>Open</section>
      </CubeOverlay>
      <h4>{result.name}<br/><span>{result.description}</span></h4>
      <CubeBackground src={result.background}></CubeBackground>
    </Cube>
  )
    return (
      <Outer color={'rgb(255, 255, 255)'}>
        <section className='bluebox'><h1>Work</h1><i className="material-icons">arrow_downward</i></section>
        {cube}
        {/* <p className='downTag'>Keep Going down for more!</p> */}
        <Mask closed={this.state.closeMask} closeMask={() => this.closeMask()} toggled={this.state.toggled} item={this.state.currentFull}/>
      </Outer>
    );
  }
}

const Sizes = {
  desktop: (1100 + 'px'),
  laptop: (992 + 'px'),
  tablet: (768 + 'px'),
  phone: (564 + 'px'),
  xsPhone: (376 + 'px')
}

const Outer = styled.section`
width: 100%;
height: 100%;
position: relative;
background-color: ${props => props.color};
z-index: 9999;
padding: 10vw 10% 10vw;
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
justify-content: center;
@media (min-width: ${Sizes.laptop}) {
  padding: 50px 10% 200px;
}
.bluebox{
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  top: 0;
  background-color: #080461;
  i{
    position: absolute;
    top: -55px;
    right: 55px;
    color: white;
    font-size: 2.5em;
    @media (min-width: ${Sizes.laptop}) {
      right: auto;
      left: 40px;
    }
  }
  h1{
    position: absolute;
    top: -20px;
    right: -10px;
    color: white;
    font-size: 1.75em;
    margin: 0;
    transform:rotate(-90deg);
    transform-origin: top left;
    @media (min-width: ${Sizes.laptop}) {
      right: auto;
      left: 10px;
    }
  }
}
`
const Cube = styled.section`
  width: 50%;
  margin: 0px;
  height: 50vh;
  transition: 0.2s ease-in;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  h4{
    position: absolute;
    height: 20%;
    bottom:10px;
    left: 5%;
    width: 90%;
    font-size: 0.8em;
    font-weight: 700;
    margin: 0;
    z-index: 11;
    color: rgb(32, 32, 32);
    background-color: rgba(255, 255, 255, 1);
    padding: 7.5px 5px 5px;
    box-sizing: border-box;
    line-height: 14px;
    span{
      font-size: 0.6em;
      font-weight: 500;
      line-height: 0;
      color: rgb(52, 52, 52);
    }
    @media (min-width: ${Sizes.xsPhone}) {
      font-size: 1em;
    }
    @media (min-width: ${Sizes.tablet}) {
      height: auto;
      padding: 12px 10px;
      font-size: 1.2em;
      line-height: 19px;
      background-color: white;
      bottom:10px;
      left: 10px;
      width: auto;
    }
  }
  &:nth-child(2){
    animation-delay: 0.1s;
    background-color: rgb(81, 180, 201);
  }
  &:nth-child(3){
    animation-delay: 0.2s;
    background-color: rgb(255, 255, 255);
  }
  &:nth-child(4){
    animation-delay: 0.3s;
    background-color: rgb(103, 103, 103);
  }
  &:nth-child(5){
    animation-delay: 0.4s;
    background-color: rgb(211, 178, 218);
  }
  &:hover .CubeOverlay{
    opacity: 1;
  }
  &:hover .CubeOverlay .OverlayButton{
    font-size: 8em;
  }
  &:hover .CubeOverlay .button2{
    font-size: 3em;
  }
`
const CubeImage = styled.img`
  width: 100%;
  max-height: 400px;
  opacity: 0.001;
`
const CubeBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`
const CubeOverlay = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(82, 82, 82, 0.65);
  opacity: 0.0;
  z-index: 100;
  transition: 0.3s ease-in;
  display: none;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: ${Sizes.laptop}) {
    display: flex;
  }
  .OverlayButton{
    font-size: 1em;
    color: white;
    padding: 10px 20px;
    position: relative;
    transition: 0.25s ease-in;
    color: rgba(255, 255, 255, 0);
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.76);
  }
`
const LearnMore = styled.section`
  height: 50px; background-color: black; width: 100%; position: absolute; bottom: 10px; z-index: -1; text-align: center;
  p{
    color: white; font-weight: 900;
  }
`
