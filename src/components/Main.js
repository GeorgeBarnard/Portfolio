import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

import Projects from './Projects'
import Slider from './Slider'

const Container = styled.main`
width: 100%; min-height: 100vh; position: absolute;
`
const Outer = styled.section`
width: 100%; min-height: 100vh; position: relative; background-color: ${props => props.color}; margin-bottom: 250px
`
const LinkRight = styled.section`
width: 50px; height: 50px; background-color: #F2EA1E; position: fixed; top: 90vh; left: 30px; z-index: 399;
span{margin-left: 3px}
@media (max-width: 992px) {
  top: 30px
}
`
const BoxOne = styled.section`
z-index: 30; height: 150%; width: 60%; position: absolute; right: 0px; bottom: -50%; background-color: ${props => props.color};
`
const BoxTwo = BoxOne.extend`
z-index: 20; height: 650px; animation-delay: 0.2s; width: 80%; bottom: -150px;
`
const BoxThree = BoxOne.extend`
z-index: 10; height: 600px; animation-delay: 0.6; width: 100%; bottom: 0;
`
const Title = styled.h1`
  position: absolute; top: -10px; left: 10px; font-size: 7em; margin: 0; animation-delay: 0.16s; z-index: 100
`
const SubTitle = styled.h2`
z-index: 40;color: white; font-size: 7.5em; font-weight: 900; position: absolute; right: 30px; bottom: 15px; margin: 0;
@media (max-width: 992px) {
  font-size: 1.5em;
}
`

class Main extends Component {
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
      <Container>
      <Outer color={'#fff'}>
        <Title className='animated boxIn'>Recent Projects</Title>
      <LinkRight onClick={() => this.rightClick()}><i className="material-icons">arrow_back</i><i className="material-icons">home</i><span>Home</span></LinkRight>
        <BoxOne color={'rgba(180, 180, 180, 0.52)'} className='animated boxIn'></BoxOne>
        <BoxTwo color={'#F2EA1E'} className='animated boxIn'></BoxTwo>
        <BoxThree color={'#73147c'} className='animated boxIn'></BoxThree>
      <SubTitle>More ↓</SubTitle>
      <Projects />
      </Outer>
      <Slider />
      </Container>
    );
  }
}

export default withRouter(Main)
