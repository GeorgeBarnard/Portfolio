import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

export default class ProjectMask extends Component {

  closeMask(){
    this.props.closeMask()
  }


  render() {
    document.body.classList.toggle('noScroll', this.props.toggled)
    var content;
    var link;
    const scrollSwitch = (value) => ({
      'MyBoathouse' : MyBoathouse,
      'RowSquad' : RowSquad,
      'Alice Benham' : AliceBenham,
      '3Mojis' : Mojis
    })[value]
    this.props.item ?
    content = scrollSwitch(this.props.item.name)
    : ''


    return (
      <Mask closing={this.props.closed} toggled={this.props.toggled}>
        <CloseButton onClick={() => this.closeMask()}><i className="material-icons">close</i></CloseButton>
        <ImgSection toggled={this.props.toggled}>
          <BackgroundOverlay src={this.props.item ? this.props.item.background : ''}></BackgroundOverlay>
          <img className='screen' src={this.props.item ? this.props.item.screen : ''}></img>
        </ImgSection>
        <ContentSection toggled={this.props.toggled}>
          <div>
            <h4>{this.props.item ? this.props.item.name : ''}</h4>
          {content}
          {this.props.item && this.props.item.link.length >= 5 ? (<a href={this.props.item ? this.props.item.link : ''}><button>Visit <i className="material-icons">exit_to_app</i></button></a>) : (<button className='coming-soon'>Coming Soon!</button>)}
          </div>
        </ContentSection>
      </Mask>
    );
  }

}

const MyBoathouse = (
    <span>MyBoathouse is one of the largest online marketplaces for buying and selling rowing equiptment in the UK.<br/><br/>
    Built in 2016 using vanilla javascript with a firebase backend, it has quickly become an invaluable resource for over 10,000 UK rowers annually.<br/><br/>
    <span className='bold'>Role: </span>Frontend Developer<br/><br/>
    <span className='bold'>Tech: </span>Vanilla JavaScript, Firebase, Google Cloud Functions, Gulp, Material Design Light </span>)

const RowSquad = (
    <span>RowSquad is a coaching, feedback and analytics application for rowers and rowing clubs around the world. Currently used by clubs in the UK and the US.<br/><br/>
    Built in 2017 using React with a firebase/Node backend, it uses the latest in analytics and graphing technology and allows for amazingly detailed comparision among rowers.<br/><br/>
    <span className='bold'>Role: </span>Javascript Developer<br/><br/>
    <span className='bold'>Tech: </span>React, Vanilla Javascript, Flux, styled-components, Firebase, Gulp</span>)

const AliceBenham = (
    <span>Alice Benham is one of the fastest growing digital marketing and coaching specialists in the UK.<br/><br/>
    Building this site has been an evolutionary process, over time it has become a treasure trove of marketing resources and content and generates a large ammount of traffic.<br/><br/>
    <span className='bold'>Role: </span>Full Stack<br/><br/>
    <span className='bold'>Tech: </span>Wordpress, Php, Google Cloud Functions, Sass</span>)

const Mojis = (
    <span>3Mojis is a fun creative writing application that uses 3 emojis as writing prompts<br/><br/>
    Currently under development, 3Mojis allows users to read, write and share their stories. 3Mojis is being developed as both a web and native application in tandem<br/><br/>
    <span className='bold'>Role: </span>Javascript Developer<br/><br/>
    <span className='bold'>Tech: </span>React, React native, Webpack, Cordova, Firebase, Google Cloud Functions, Node, Gulp, Styled-components</span>)

const Sizes = {
  desktop: (1100 + 'px'),
  laptop: (992 + 'px'),
  tablet: (768 + 'px'),
  phone: (564 + 'px'),
  xsPhone: (374 + 'px')
}

const shrink = keyframes`
  0% {
    transform: translateX(110vw);
  }

  100%{
    transform: translateX(0%);
  }
`;
const expand = keyframes`
  0% {
    transform: translateX(0%);
  }

  100%{
    transform: translateX(110vw);
  }
`;

const Mask = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  animation: ${props => props.toggled ? shrink : expand};
  animation-duration: 0.01s;
  animation-delay: ${props => props.closing ? '0.3s' : '0'};
  animation-fill-mode: forwards;
  overflow: hidden;
  @media (min-width: ${Sizes.laptop}) {

  }
`
const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  top: 5px;
  left: 5px;
  background-color: white;
  position: absolute;
  z-index: 10;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: rgb(205, 205, 205);
  }
  &:focus{
    outline: none;
  }
  @media (min-width: ${Sizes.tablet}) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: ${Sizes.laptop}) {
    top: 20px;
    left: 20px;
  }
`

const ImgSection = styled.section`
  width: 100%;
  position: absolute;
  height: 35%;
  top: 0;
  transform: translateY(${props => props.toggled ? '0' : '-110%'});;
  transition: linear 0.3s;
  transition-delay:  ${props => props.toggled ? '0s' : '0'};
  background-color: rgb(131, 152, 189);
  position: relative;
  z-index: 9;
  @media (min-width: 600px) {
    height: 50%;
  }
  .screen{
    width: 80%;
    position: absolute;
    left: 10%;
    bottom: -60px;
    @media (min-width: ${Sizes.tablet}) {
      bottom: -60px;
    }
    @media (min-width: ${Sizes.laptop}) {
      left: auto;
      position: absolute;
      right: 20px;
      width: 50%;
      bottom: -50px;
      top: auto;
    }
    @media (min-width: ${Sizes.desktop}) {
      width: 50%;
      top: -20px;
      bottom: auto;
    }
  }
`

const BackgroundOverlay = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.8;
  -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(170,208,255,1)), to(rgba(0,0,0,0)))
`

const ContentSection = styled.section`
  position: absolute;
  left: 0;
  width: 100%;
  height: 65%;
  background-color: #ffffff;
  bottom: 0;
  transform: translateY(${props => props.toggled ? '0' : '110%'});;
  transition: linear 0.3s;
  transition-delay:  ${props => props.toggled ? '0s' : '0'};
  display: flex;
  @media (min-width: 600px) {
    height: 50%;
  }
  @media (min-width: ${Sizes.laptop}) {
    align-items: center;
    justify-content: center;
  }
  @media (min-width: ${Sizes.desktop}) {
    justify-content: left;
  }
  div{
    font-size: 0.8em;
    position: relative;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    margin: 65px 0 0 0;
    width: 100%;
    padding: 0 5% 30px;
    color: rgb(36, 36, 36);
    font-weight: 500;
    padding-right: 20px;
    .bold{
      font-weight: bolder;
    }
    h4{
      font-size: 2em;
      color:#212121;
      margin: 0 0 10px;
      @media (min-width: ${Sizes.laptop}) {
        font-size: 3em;
      }
    }
    @media (min-width: ${Sizes.xsPhone}) {
      width: 85%;
    }
    @media (min-width: ${Sizes.tablet}) {
      font-size: 1em;
      padding-right: 40px;
      overflow: hidden;
    }
    @media (min-width: ${Sizes.laptop}) {
      margin: 0 0 0 0;
    }
    @media (min-width: ${Sizes.desktop}) {
      max-width: 40%;
      padding: 0 5%;
    }
  }
  a{
    text-decoration: none;
  }
  button{
    font-size: 1em;
    background-color: #09e076;
    border: none;
    padding: 5px 10px;
    display: block;
    margin: 10px 0 5px;
    i{
      font-size: 1em;
      vertical-align: -2px;
    }
  }
  .coming-soon{
    background-color: #e27919;
  }
`
