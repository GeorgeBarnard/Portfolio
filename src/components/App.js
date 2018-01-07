import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom'
import styled from 'styled-components';

import Image from '../img/test1.svg'
import Image2 from '../img/test2.svg'
import MountainImg from '../img/piece1.png'
import MaskImg from '../img/mask4.svg'
import Vid from '../img/vid3.mp4'

import Bio from './Bio'

const Outer = styled.section`
width: 100%; position: absolute;
`

const HomeImage = styled.img`
  position: absolute;
  top: 0px; width: 70%; right: -90px; z-index: 11;
`
const Container = styled.section`
  width: 100%; position: relative; min-height: 100vh; overflow: hidden; transition: 0.2s ease-in;
  background-color: ${props => props.color};
  .cube1{
    position: absolute; top: 50px; left: 50px; width: 300px; z-index: 999;
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
  height: 50%; width: 2px; background-color: #000; position: absolute; z-index: 999;
  left: calc(50% - 1px); top: 35%;
  section{
    width: 10px; height: 10px; border-left: 2px solid #000; border-bottom: 2px solid #000;
    transform: rotate(-45deg); position: absolute; bottom: 0; left: -5px
  }
`
const LinkLeft = styled.section`
  width: 50px; height: 50px; position: absolute; top: calc(90vh - 120px); right: 30px; background-color: #73147c; z-index: 99; color: white;
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
const LinkLeft2 = LinkLeft.extend`
  top: calc(90vh - 60px); background-color: rgb(23, 23, 23);
`

const LinkLeft3 = LinkLeft.extend`
  top: 90vh; background-color: rgb(255, 255, 255); color: rgb(27, 27, 27);
`
const BottomSection = styled.section`
  width: 100%; height: 40%; background-color: yellow; position: absolute; bottom: 0; text-align: center; z-index: 20;
  p{
    position: absolute; bottom: 20px; left: 20px;
    padding: 0px; margin: 0;
    font-size: 2.5em;
    max-width: 400px;
  }
`
const ImageMask = styled.section`
width: 70%; position: relative; position: fixed; overflow: hidden; top: 100px; transition: 0.25s ease-in;
transform: ${props => props.toggled ? 'rotate(-1deg)' : 'rotate(29deg)'} ;
top: ${props => props.toggled ? '60%' : '100px'} ;
right: ${props => props.toggled ? '-100px' : '-50px'} ;
width: ${props => props.toggled ? '54%' : '70%'} ;
`
const CoverImage = styled.section`
position: absolute; top: 2.5%; left: 2.5%; width: 95%; height: 95%; background-color: #73147c; z-index: 9; transition: 0.2s ease-in-out;
opacity: ${props => props.toggled ? '0' : '1'} ;
`
const Video = styled.video`
height: 95%; position: absolute; top: 2.5%; left: 0; z-index: 8; min-width: 100%;
`
const Mask = styled.img`
  width: 100%; height: 100%; position: relative; top: 0; left: -2px; z-index: 10;
`

class App extends Component {
  constructor() {
   super()
   this.state = {
     hitScreen: false,
     hovered: false
   }

 }

  leftClick(){
    this.props.history.push('/main')
  }
  labsClick(){
    this.props.history.push('/labs')
  }

  hitScreen(){
    this.setState({
      hitScreen: true
    })
  }

  leftScreen(){
    this.setState({
      hitScreen: false
    })
  }

  maskHover(){
    this.setState({
      hovered: true
    })
  }
  maskHoverOut(){
    this.setState({
      hovered: false
    })
  }


  render() {

     var yellow = '#f2ea1e'
    return (
      <Outer>
        <Container color2={yellow} color='white'>
          <DownLine><section></section></DownLine>
        <LinkLeft2 onClick={() => this.labsClick()}><i className="material-icons">build</i><i className="material-icons">arrow_forward</i><span>Labs</span></LinkLeft2>
        <LinkLeft onClick={() => this.leftClick()}><i className="material-icons">work</i><i className="material-icons">arrow_forward</i><span>Work</span></LinkLeft>
        <LinkLeft3><i className="material-icons">library_books</i><i className="material-icons">arrow_downward</i><span>Bio</span></LinkLeft3>
      <ImageMask onMouseEnter={() => this.maskHover()} onMouseLeave={() => this.maskHoverOut()} toggled={this.state.hitScreen}>
        <CoverImage toggled={this.state.hovered}></CoverImage>
        <Mask src={MaskImg}></Mask>
      <Video ref="Video1"
            className="video" src={Vid}
           loop autoPlay muted
          ></Video>
      </ImageMask>

          <BottomSection>
            {/* <p>My Mum say's my work is really great</p> */}
          </BottomSection>
          <section className='cube1'>
            <section className='borderCube'></section>
            <h1>George Barnard</h1>
            <h2>React Developer</h2>
          </section>
        </Container>
        <Bio hit={() => this.hitScreen()} left={() => this.leftScreen()} />
      </Outer>
    );
  }
}

export default withRouter(App);
