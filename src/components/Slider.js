import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

import '../App.css';
import Image from '../img/test1.svg'
import Image2 from '../img/test2.svg'
import Screen from '../img/screen.png'
import Screen2 from '../img/screen2.png'
import Phone from '../img/phone.png'
import Waypoint from 'react-waypoint';


const Container = styled.section`
  width: 100%; position: relative; height: 100vh;overflow: hidden; transition: 0.2s ease-in;
  background-color: ${props => props.color};
`
const ScreenImg = styled.img`
  width: 62.5%;
  bottom: 0px;
  position:absolute;
  z-index: 200;
  left: ${props => props.slide};
  transition: 0.45s ease-in;
  @media (max-width: 992px) {
  width: 97.5%;
  left: ${props => props.smallSlide};
  z-index: 200;
  }
`
const PhoneImg = ScreenImg.extend`
  width: 15%;
  left: auto; right: ${props => props.slide};
  @media (max-width: 992px) {
  width: 60%;
  left: auto;
  right: ${props => props.smallSlide};
  z-index: 195;
  }
`
const ImageOne = styled.img`
 position: absolute;
 width: 100%;
 bottom: -300px;
 z-index: 190;
 transition: 0.3s ease-in;
 right: ${props => props.slide};
 @media (max-width: 554px) {
   bottom: -10%;
   width: 200%;
   right: ${props => props.smallSlide};
 }
`
const TitleContainer = styled.h1`
  font-weight: 900; font-size: 3em; color: black; text-align: right; max-width: 300px;  z-index: 200; margin: 0; line-height: 50px;
  position: absolute; top: 25px; right: ${props => props.slide}; transition: 0.6s ease-in;
  p{font-size:0.5em; line-height: 25px; margin-top: 10px}
  @media (max-width: 554px) {
    top: 50px;
  }
`
const NextButton = styled.button`
  position: absolute; bottom: 20px; right: 20px; z-index: 300;
`


export default class slider extends Component {
  constructor() {
   super()
   this.state = {
     boxTrigger: false,
     selectedSet: 0
   }
  }

  pointHit(){
    console.log('Hit');
    this.setState({
      boxTrigger: true
    })
  }
  pointLeft(){
    console.log('Out');
    this.setState({
      boxTrigger: false
    })
  }
  changeSlide(){
    this.setState({
      boxTrigger: false
    })
    var self = this
    setTimeout(function() {
      var selected = self.state.selectedSet
      if (selected < 1) {
        selected++
        self.setState({selectedSet: selected, boxTrigger: true})
      } else {
        self.setState({selectedSet: 0, boxTrigger: true})
      }
    }, 800);
  }


render() {
  var portfolioItem = [
     {
       'name' : 'The Gamekeeper',
       'img' : Screen
     },
     {
       'name' : 'Farnham Farmhouse',
       'img' : Screen2
     }
   ]
   var currentItem = portfolioItem[this.state.selectedSet]
    return (
      <Waypoint
        onEnter={() => this.pointHit()}
        onLeave={() => this.pointLeft()}
        bottomOffset="90%"
      >
        <Container color={this.state.boxTrigger ? 'white' : 'white'}>
          <NextButton onClick={() => this.changeSlide()}>Change</NextButton>
          <ImageOne
             slide={this.state.boxTrigger ? '-100px' : '-100vw'}
             smallSlide={this.state.boxTrigger ? '-50%' : '-200vw'}
             src={Image}>
          </ImageOne>
          <ScreenImg
            slide={this.state.boxTrigger ? '50px' : '-100vw'}
            slide={this.state.boxTrigger ? '1.25%' : '-100vw'}
            src={currentItem.img}>
          </ScreenImg>
          <PhoneImg
            slide={this.state.boxTrigger ? '25%' : '-100vw'}
            smallSlide={this.state.boxTrigger ? '-25%' : '-100vw'}
            src={Phone}>
         </PhoneImg>
        <TitleContainer slide={this.state.boxTrigger ? '25px' : '-100vw'}>{currentItem.name}<br/><p>Woodbridge<br/>Suffolk</p></TitleContainer>
        </Container>
      </Waypoint>
    );
  }
}
