import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled, {keyframes} from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

import '../App.css';
import Image from '../img/test1.svg'
import Image2 from '../img/test2.svg'
import Screen from '../img/screen-min.png'
import Screen2 from '../img/screen2-min.png'
import Phone from '../img/android-min.png'
import sit from '../img/sittingdown.png'
import Waypoint from 'react-waypoint'


export default class slider extends Component {
  constructor() {
   super()
   this.state = {
     boxTrigger: false,
     selectedSet: 0,
     mobileToggle: false
   }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var body = document.getElementById('root').clientHeight
    var scrollValue = window.scrollY + window.innerHeight
    if(scrollValue >= body - (window.innerHeight / 2)){
      this.setState({
        boxTrigger: true
      })
    } else {
      this.setState({
        boxTrigger: false
      })
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
      boxTrigger: false,
      phoneToggle: false
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

  phoneToggle(){
    if(this.state.phoneToggle){
      this.setState({phoneToggle: false})
    }else{
      this.setState({phoneToggle: true})
    }
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

      // <Waypoint
      //   onEnter={() => this.pointHit()}
      //   onLeave={() => this.pointLeft()}
      //   topOffset='50px'
      //   >
        <Container ref='container' color={this.state.boxTrigger ? 'white' : 'white'}>
            <DownSection hide={this.state.boxTrigger}>
                <p>More work down here</p>
                <DownArrow><i className="material-icons">arrow_downward</i></DownArrow>
            </DownSection>
            <ImageOne
               slide={this.state.boxTrigger ? '-100px' : '100vw'}
               smallSlide={this.state.boxTrigger ? '-50%' : '200vw'}
               src={Image}>
            </ImageOne>
            <ScreenImg
              slide={this.state.boxTrigger ? '50px' : '-100vw'}
              slide={this.state.boxTrigger ? '1.25%' : '-100vw'}
              src={currentItem.img}>
            </ScreenImg>
            <PhoneImg
              onClick={() => this.phoneToggle()}
              toggle={this.state.phoneToggle}
              slide={this.state.boxTrigger ? '55%' : '-50vw'}
              smallSlide={this.state.boxTrigger ? '8%' : '-50vw'}
              src={Phone}>
           </PhoneImg>
          <TitleContainer slide={this.state.boxTrigger ? '0px' : '100vw'}>
            {currentItem.name}<br/>
            <p>Woodbridge<br/>Suffolk</p>
          <ViewButton onClick={() => this.changeSlide()}>View</ViewButton>
          <NextButton onClick={() => this.changeSlide()}>Next</NextButton>
          <p className='mobile-message'>(Click Mobile to expand)</p>
          </TitleContainer>
          {/* <SittingMan src={sit}></SittingMan> */}
        </Container>
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

const Container = styled.section`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow:hidden;
  transition: 0.2s ease-in;
  background-color: ${props => props.color};
   z-index: 999;
  @media (min-width: ${Sizes.laptop}) {
    min-height: 700px;
  }
`
const ScreenImg = styled.img`
  width: 62.5%;
  bottom: 0px;
  position:absolute;
  z-index: 200;
  transform: translateX(${props => props.slide});
  transition: 0.45s ease-in;
  @media (max-width: 992px) {
  width: 97.5%;
  transform: translateX( ${props => props.smallSlide});
  z-index: 200;
  bottom: 10px;
  }
`
const PhoneImg = styled.img`
  position:absolute;
  transform: translateX( ${props => props.smallSlide});
  z-index: 200;
  bottom: 10px;
  transition: 0.6s ease-in-out;
  right: auto;
  width: ${props => props.toggle ? '50%' : '20%'};
  @media (min-width: ${Sizes.xsPhone}) {
  width: ${props => props.toggle ? '60%' : '20%'};
  }
  @media (min-width: ${Sizes.tablet}) {
    width: ${props => props.toggle ? '50%' : '20%'};
  }
  @media (min-width: ${Sizes.laptop}) {
    width: 12%;
    transform: translateX(${props => props.slide});
    bottom: 20px;
  }
`
const ImageOne = styled.img`
 position: absolute;
 width: 200%;
 right: -100%;
  bottom: -300px;
 z-index: 190;
 transition: 0.3s ease-in;
 transform: translateX( ${props => props.slide});
 @media (min-width: ${Sizes.laptop}) {
   width: 100%;
   right: -50%;
   transform: translateX( ${props => props.smallSlide});
 }
`
const TitleContainer = styled.h1`
  font-weight: 900;
  font-size: 2.5em;
  right: 30px;
  color: black;
  text-align: right;
  max-width: 300px;
  z-index: 200;
  margin: 0;
  line-height: 30px;
  position: absolute;
  top: 30px;
  transform: translateX( ${props => props.slide});
  transition: 0.6s ease-in;
  p{
    font-size:0.5em;
    line-height: 29px;
    margin-top: 10px;
    font-weight: 500;
  }
  .mobile-message{
    font-size: 0.25em;
    margin-top: 0;
    @media (min-width: ${Sizes.laptop}) {
      display: none;
    }
  }
  @media (min-width: ${Sizes.tablet}) {
    font-size: 3em;
    max-width: 500px;
    line-height: 50px;
  }
`
const NextButton = styled.button`
  position: relative;
  top: -10px;
  z-index: 300;
  width: 50px;
  height: 50px;
  background-color: rgb(136, 185, 221);
  color: white;
  font-weight: 900;
  border: none;
  margin: 0 0 0 5px;
  &:hover{
    background-color: rgb(82, 163, 222);
  }
  &:focus{
    outline: none;
  }
`
const ViewButton = NextButton.extend`
  background-color: #002e67;
  color: rgb(255, 255, 255);
`
const Arrow = keyframes`
  0% {
  transform: translateY(0);
  }
  50% {
   transform: translateY(10px);
  }
  100%{
    transform: translateY(0);
  }
`;

const DownSection = styled.section`
  width: 100%;
  text-align: center;
  transition: 0.5s ease-out;
  opacity: ${props => props.hide ? '0' : '1'};
`

const DownArrow = styled.section`
  width: 50px;
  height: 50px;
  position: absolute;
  font-size: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Arrow} 2s linear infinite;
  top: 30px;
  left: calc(50% - 25px);
`
const SittingMan = styled.img`
  height: 150px;
  position: absolute;
  bottom: 0;
  right: 10px;
  z-index: 9999;
`
