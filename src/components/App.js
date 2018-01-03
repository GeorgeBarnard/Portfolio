import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom'
import styled from 'styled-components';

import Image from '../img/test1.svg'
import Image2 from '../img/test2.svg'

const Outer = styled.section`
width: 100%; position: absolute;
`

const HomeImage = styled.img`
  position: absolute;
  top: -200px; width: 70%; right: -90px; transform: rotate(25deg);
`
const Container = styled.section`
  width: 100%; position: relative; height: 100vh;overflow: hidden; transition: 0.2s ease-in;
  background-color: ${props => props.color};
  .cube1{
    position: absolute; top: 50px; left: 50px; width: 300px;
    height: 300px; background-color: ${props => props.color2};
   }
  .cube1 h1{
    position: absolute; top: -1.5em; left: 0.25em; -webkit-text-stroke: 1px rgba(115, 20, 124, 0.76);
    font-size: 8em; color: rgba(115, 20, 124, 0); line-height: 0.85em;
    margin: 0; transform: rotate(90deg); transform-origin: bottom left}
  .cube1 h2{
    position: absolute; bottom: -2em; right: -1.5em; font-size: 2em;
    max-width: 100px; text-align: left; font-weight: 900;
  }
  .cube1 .borderCube{
    width: 100%; height: 100%; border: 1px solid rgba(115, 20, 124, 0.76);
    position: absolute; left: 0.75em; top: 0.75em;
  }
`
const SmallContainer = Container.extend`
  height: 100%; background-color: red
`

const DownLine = styled.section`
  height: 50%; width: 2px; background-color: #73147c; position: absolute;
  left: calc(50% - 1px); top: 35%;
  section{
    width: 10px; height: 10px; border-left: 2px solid #73147c; border-bottom: 2px solid #73147c;
    transform: rotate(-45deg); position: absolute; bottom: 0; left: -5px
  }
`
const LinkLeft = styled.section`
  width: 50px; height: 50px; position: absolute; top: 90vh; right: 30px; background-color: #73147c; z-index: 99; color: white;
  span{
    margin-left: 3.5px;
  }
  i{
    font-size: 1em;
    margin: 1.5px;
    &:nth-child(1){
      margin: 6px 6px 2px;
    }
  }
`

class App extends Component {
  constructor() {
   super()
   this.state = {
   }
 }

  leftClick(){
    this.props.history.push('/main')
  }

  render() {

     var yellow = '#f2ea1e'
    return (
      <Outer>
        <Container color2={yellow} color='white'>
          <DownLine><section></section></DownLine>
        <LinkLeft onClick={() => this.leftClick()}><i className="material-icons">work</i><i className="material-icons">arrow_forward</i><span>Work</span></LinkLeft>
          <HomeImage src={Image2}></HomeImage>
          <section className='cube1'>
            <section className='borderCube'></section>
            <h1>George Barnard</h1>
            <h2>React Developer</h2>
          </section>
        </Container>
      </Outer>
    );
  }
}

export default withRouter(App);
