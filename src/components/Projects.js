import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

import grassBG from '../img/grass.png'
import aliceBG from '../img/aliceBG.jpg'
import rowsquadBG from '../img/rowsquadBG.jpeg'
import boathouseBG from '../img/boathouseBG.jpeg'

import aliceScreen from '../img/alice-screen-min.png'
import rowsquadScreen from '../img/rowsquad-screen-min.png'
import myboathouseScreen from '../img/myboathouse-screen-min.png'
import mojiscreen from '../img/mojiscreen.png'

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
       'link' : 'https://myboathouse.co.uk',
       'background' : boathouseBG
     },
     {
       'name' : 'RowSquad',
       'description': 'Training and analytics application',
       'screen' : rowsquadScreen,
       'link' : 'https://rowsquad.com',
       'background' : rowsquadBG
     },
     {
       'name' : 'Alice Benham',
       'description': 'Inbound marketing website',
       'screen' : aliceScreen,
       'link' : 'http://www.alicebenham.co.uk',
       'background' : aliceBG
     },
     {
       'name' : '3Mojis',
       'description': 'Creative writing app/mobile app',
       'screen' : mojiscreen,
       'link' : '',
       'background' : grassBG
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
margin-top: -2px;
position: relative;
background-color: ${props => props.color};
z-index: 9999;
padding: 10vh 0%;
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
justify-content: center;
@media (min-width: ${Sizes.tablet}) {
padding: 10vh 5%;
}
@media (min-width: ${Sizes.laptop}) {
  padding: 50px 5% 200px;
}
.bluebox{
  position: absolute;
  width: 50%;
  height: calc(100% + 2px);
  right: 0;
  top: -2px;
  background-color: #080461;
  i{
    position: absolute;
    top: -15px;
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
    top: 20px;
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
  width: 100%;
  margin: 0px;
  height: 47.5vh;
  transition: 0.2s ease-in;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${Sizes.tablet}) {
  width: 50%;
  }
  h4{
    position: absolute;
    height: 20%;
    bottom: 0px;
    left: 0;
    width: 100%;
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    z-index: 11;
    color: rgb(32, 32, 32);
    background-color: rgba(255, 255, 255, 1);
    padding: 14.5px 21px 5px;
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
  cursor: pointer;
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
    cursor: pointer;
    font-size: 1em;
    user-select: none;
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
