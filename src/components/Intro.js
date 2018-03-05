import React, { Component } from 'react';
import styled from 'styled-components'

import center from '../img/center.png'
import up from '../img/up.png'
import down from '../img/down.png'
import left from '../img/left.png'
import right from '../img/right.png'
import leftup from '../img/upleft.png'
import rightup from '../img/upright.png'
import leftdown from '../img/downleft.png'
import rightdown from '../img/downright.png'

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {headSrc: center};
  }


  over(val){
    const imgSwitch = (value) => ({
      'center' : center,
      'up' : up,
      'down' : down,
      'left' : left,
      'right' : right,
      'leftup' : leftup,
      'rightup' : rightup,
      'leftdown' : leftdown,
      'rightdown' : rightdown
    })[value]
    this.setState({
      headSrc: imgSwitch(val)
    })
  }

  render() {
    var tag
    window.innerWidth >= 1100 ? tag = "Move around my face.. It's ok" : tag = "Touch around my face.. It's ok"

    return (
      <Outer >
        <Inner>
          <section className='cube1'>
            <h1>George Barnard</h1>
            <h2>Front end Web Developer</h2>
            <h4>({tag})</h4>
          </section>
          <Grid>
            <Headshot src={this.state.headSrc} ></Headshot>
            <Cube onClick={() => this.over('leftup')} onMouseOver={() => this.over('leftup')} colour='green' className='cube'></Cube>
            <Cube onClick={() => this.over('up')} onMouseOver={() => this.over('up')} colour='red' className='cube'></Cube>
            <Cube onClick={() => this.over('rightup')} onMouseOver={() => this.over('rightup')} colour='pink' className='cube'></Cube>
            <Cube onClick={() => this.over('left')} onMouseOver={() => this.over('left')} colour='red' className='cube'></Cube>
            <Cube onClick={() => this.over('center')} onMouseOver={() => this.over('center')} colour='green' className='cube'></Cube>
            <Cube onClick={() => this.over('right')} onMouseOver={() => this.over('right')} colour='red' className='cube'></Cube>
            <Cube onClick={() => this.over('leftdown')} onMouseOver={() => this.over('leftdown')} colour='pink' className='cube'></Cube>
            <Cube onClick={() => this.over('down')} onMouseOver={() => this.over('down')} colour='blue' className='cube'></Cube>
            <Cube onClick={() => this.over('rightdown')} onMouseOver={() => this.over('rightdown')} colour='pink' className='cube'></Cube>
          </Grid>
      </Inner>
      </Outer>
    );
  }

}

export default Intro;

const Sizes = {
  desktop: (1100 + 'px'),
  laptop: (992 + 'px'),
  tablet: (768 + 'px'),
  phone: (564 + 'px'),
  xsPhone: (376 + 'px')
}

const Grid = styled.section`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
`
const Cube = styled.section`
  width: 33.333vw;
  height: 33.333vh;
  background-color: white;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`
const Headshot = styled.img`
 height: 60%;
 position: absolute;
 bottom: -30px;
 pointer-events: none;
 filter:grayscale(1);
 @media (min-width: ${Sizes.tablet}) {
  height: 65%;
 }
 @media (min-width: ${Sizes.laptop}) {
  height: 70%;
 }
 @media (min-width: ${Sizes.desktop}) {
  height: 80%;
 }
`
const Outer = styled.section`
  width: 100%;
  height: 100%;
  z-index: 999999;
`
const Inner = styled.section`
position: relative;
height: 100%;
padding: 10%;
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
background-color: #fff;
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
`
