import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'
import Waypoint from 'react-waypoint';

const Container = styled.section`
  position: relative;
`
const Outer = styled.section`
width: 100%; min-height: 100vh; position: relative; top: 0; left: 0; background-color: ${props => props.color}; z-index:99; padding: 0 15px;  box-sizing: border-box;
display: flex; flex-wrap: wrap; text-align: center;
h1{
  font-size: 4em; margin: 0 auto;
}
`
const Outer2 = Outer.extend`
  z-index: 99; position: absolute; top: 0;
`
const Box = styled.section`
  width: calc(50% - 60px); margin: 30px; height: calc(50vw - 60px); background-color: #73147c; margin-top: 5vh; z-index: 9999; display: flex; flex-wrap: wrap;
`
const Box2 = Box.extend`
  background-color: yellow; z-index: -1; height: 45vh
`
const Dial = styled.section`
  width: calc(50% - 30px); height: calc(50% - 30px); margin: 15px; border-radius: 50%; background-color: white;
`

 class Labs extends Component {
  constructor() {
   super()
   this.state = {
     user: null
   }
 }

 pointHit(){
   this.props.hit()
 }
 pointLeft(){
   this.props.left()
 }

render() {

    return (
      <Waypoint
        onEnter={() => this.pointHit()}
        onLeave={() => this.pointLeft()}
        bottomOffset="70%"
      >
        <Container>
        <Outer color={'rgba(255, 255, 255, 0.00)'}>
          <Box>
            <Dial></Dial>
            <Dial></Dial>
            <Dial></Dial>
            <Dial></Dial>
          </Box>
          <Box2>
            <p>My Mum say's my work is really great</p>
          </Box2>
        </Outer>
        </Container>
      </Waypoint>
    );
  }
}

export default withRouter(Labs);
