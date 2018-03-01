import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import scrollToComponent from 'react-scroll-to-component';


import MountainImg from '../img/piece1.png'
import MaskImg from '../img/mask4.svg'
import headshot from '../img/headshot.png'
import suit from '../img/spacegeorge4-min.png'
import waveguy from '../img/sitting-min.png'
import Waypoint from 'react-waypoint';
// import suit from '../img/iron.png'

import Bio from './Bio'
import Menu from './Menu'
import Slider from './Slider'
import Projects from './Projects'
import Contact from './Contact'



class App extends Component {
  constructor() {
   super()
   this.state = {
     height: 0
   }
 }


scrollTo(location){
  const scrollSwitch = (value) => ({
    'contact' : this.contactSection,
    'bio' : this.bioSection,
    'work' : this.workSection,
    'slider' : this.slider
  })[value]
  scrollToComponent(scrollSwitch(location), {align: 'middle'});
}

  render() {

     var blue = '#080461'
    return (

      <Outer
         className='outer'>
        <Container color='white'>
          <Menu scroll={((value) => this.scrollTo(value))}/>
          <section className='fixed-element'>
            <section className='cube1'>
            <h1>George Barnard</h1>
            <h2>Front end Web Developer</h2>
            <h4>(Bad Stock Photo Enthusiast)</h4>
            </section>
            {/* <SideSection></SideSection> */}
            <BottomSection color={blue}>
              <img src={waveguy}></img>
            </BottomSection>
          </section>
        </Container>
        <Bio ref={(section => (this.bioSection = section))} />
        <Projects ref={(section => (this.workSection = section))} color='white' />
        <Contact ref={(section => (this.contactSection = section))} />
        <Slider ref={(section => (this.Slider = section))} color='white' />
        {/* <Slider /> */}
      </Outer>
    );
  }
}

export default withRouter(App);


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
  overflow-x:hidden;
  padding: 0;
  margin: 0;
`

const Container = styled.section`
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
  transition: 0.2s ease-in;
  background-color: ${props => props.color};
  .fixed-element{
    width: 100%;
    height: 100vh;
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
  }
  .cube1{
    pointer-events: none;
    position: absolute;
    top: 5px;
    left: 0px;
    width: 300px;
    z-index: 9;
    height: 300px;
    background-color: rgba(255, 255, 255, 0);
    @media (min-width: ${Sizes.desktop}) {
      top: 50px;
      left: 50px;
    }
   }
  .cube1 h1{
    position: relative;
    top: 0.25em;
    left: 30px;
    -webkit-text-stroke: 2px rgba(0, 0, 0, 0.76);
    font-size: 4em;
    color: rgba(255, 255, 255, 0);
    margin: 0;
    line-height: 0.85;
      @media (min-width: ${Sizes.tablet}) {
        font-size: 5em;
      }
      @media (min-width: ${Sizes.laptop}) {
        font-size: 6em;
      }
    }
  .cube1 h2, h4{
    position: relative;
    left: 32.5px;
    font-size: 2em;
    max-width: 500px;
    text-align: left;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 0;
  }
  .cube1 h4{
    font-size: 1em;
    margin-top: 5px;
  }
  .wrapper {
   height:100%;
   width: 100%;
   margin: 0;
   padding: 0;
   border: 0;
 }
  .wrapper td {
     vertical-align: middle;
     text-align: center;
  }
`

const BottomSection = styled.section`
  width: 50%; height: 25%;
  background-color: ${props => props.color};
  position: absolute;
  top: 75%;
  left: 0;
  text-align: center;
  z-index: 10;
  img{
    height: 200px;
    position: absolute;
    right: 10px;
    top: -100px;
    @media (min-width: ${Sizes.tablet}) {
      height: 300px;
      right: 20px;
      top: -150px;
    }
  }
`

const SideSection = styled.section`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #7ab7e6;
`


const Headshot = styled.img`
  position: relative;
  margin: 0 auto;
  bottom: 0;
  z-index: 99;
  width: 82.5%;
  height: auto;
  @media (min-width: ${Sizes.phone}) {
    height: auto;
    width: 70%;
  }
  @media (min-width: ${Sizes.tablet}) {
    height: auto;
    width: 80%;
  }
  @media (min-width: ${Sizes.laptop}) {
    height: 180vh;
    width: auto
  }
`
