import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

 export default class Labs extends Component {
  constructor() {
   super()
   this.state = {
     user: null
   }
 }

render() {

    return (
        <Container>
        <Outer color={'rgba(255, 255, 255, 0.00)'}>
          <Box>
            <InnerContainer>
              <Inner>
                <TitleSection className='title'>
                  <p>Welcome</p><br />
                  <p>To</p><br />
                  <p>My</p><br />
                  <p>Portfolio</p><br />
                </TitleSection>
              </Inner>
              <Inner2>

                <div className='box-content'>
                  <h3 className='title'>What I do</h3>
                  I am a web developer, I have primarily been working with front end frameworks, such as react, on projects for the past 2 years<br /><br />
                  Whatever the project demands, is what I intend to deliver.
                  I have been designing user experiences for over 6 years in both the web and audio software industries<br/><br />
                  The user comes first and I have, and continue to, try hard to make it as easy for them as possible
                </div>

              </Inner2>
            </InnerContainer>
            <Inner3>
              <div className='box-content'>
                <h3 className='title'>Things I'm good at</h3>

                <span>
                  Strong knowledge of HTML/CSS/JS, React.js and web application development <br/><br/>
                  Interface design: Sass, Styled-components, animation<br/><br/>
                  Working within small to medium teams with designers, developers and marketing professionals to create effective, intuitive, well tested and well received experiences<br/><br/>
                  Building full stack solutions with the use of modern back end libraries such as Firebase, using the support of package tools such as Gulp and Webpack
              </span>
              <section className='icon-section'>
                <h5>Production Ready:</h5>
                <section className='icon-container'><i className="devicon-javascript-plain"></i><p>Javascript</p></section>
                <section className='icon-container'><i className="devicon-react-original"></i><p>React</p></section>
                <section className='icon-container'><i className="devicon-html5-plain"></i><p>Html5</p></section>
                <section className='icon-container'><i className="devicon-css3-plain"></i><p>CSS3</p></section>
                <section className='icon-container'><i className="devicon-sass-original"></i><p>Sass</p></section>
                <section className='icon-container'><i className="devicon-gulp-plain"></i><p>Gulp</p></section>
                <section className='icon-container'><i className="devicon-git-plain"></i><p>Git</p></section>
                <section className='icon-container'><i className="devicon-webpack-plain"></i><p>Webpack</p></section>
              </section>
            </div>
            </Inner3>
          </Box>
        </Outer>
        </Container>
    );
  }
}


const Sizes = {
  desktop: (1100 + 'px'),
  laptop: (992 + 'px'),
  tablet: (768 + 'px'),
  phone: (564 + 'px'),
  xsPhone: (374 + 'px')
}

const Container = styled.section`
  position: relative;
  z-index: 999;
  width: 100%;
  margin-top: 100vh;
  height: fit-content;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: ${Sizes.laptop}) {
    height: 100vh;
  }
`
const Outer = styled.section`
  width: 100%;
  ${'' /* min-height: 200vh; */}
  height: fit-content;
  position: relative;
  top: 0;
  left: 0;
  background-color: ${props => props.color};
  z-index:99;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  h1{
    font-size: 4em; margin: 0 auto;
  }
  @media (min-width: ${Sizes.laptop}) {
    padding: 0 15px;
    height: 100%;
  }
`
const Outer2 = Outer.extend`
  z-index: 99; position: absolute; top: 0;
`
const Box = styled.section`
  color: white;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  transition: 0.5s ease-in-out;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: rgb(104, 160, 205);
  z-index: 9999;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${Sizes.laptop}) {
    height: 100%;
    position: absolute;
  }
`
const InnerContainer = styled.section`
  width: 100%;
  height: auto;
  @media (min-width: ${Sizes.laptop}) {
    width: 50%;
    height: 100%;
  }
`

const TitleSection = styled.section`
font-size: 1.4em;
position: relative;
margin-top: 60px;
line-height: 0.5;
color: rgba(10, 10, 10, 1);
font-weight: 900;
${'' /* -webkit-text-stroke: 1px rgba(0, 0, 0, 1); */}
@media (min-width: ${Sizes.tablet}) {
  font-size: 2.5em;
  right: 20px;
}
p{
  margin: 0;
  &:nth-child(1){
    font-size: 1.5em;
  }
  &:nth-child(7){
    font-size: 3em;
    letter-spacing: 3px;
    ${'' /* -webkit-text-stroke: 2px rgba(0, 0, 0, 1); */}
  }
}
@media (min-width: ${Sizes.laptop}) {
  position: absolute;
  bottom: 60px;
  margin: 0;
  right: 60px;
}
`

const Inner = styled.section`
  width: 100%;
  background-color: #09e076;
  position: relative;
  color: black;
  padding: 30px 10px;
  box-sizing: border-box;
  text-align: right;
  .divider{
    width: 70px;
    height: 2px;
    background-color: white;
    margin-bottom: 10px;
  }
  @media (min-width: ${Sizes.laptop}) {
    height: 50%;
  }
`

const Inner2 = Inner.extend`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: white;
  padding: 40px 20px;
  text-align: right;
  color: rgb(34, 34, 34);
  .box-content{
    .divider{
      background-color: rgb(34, 34, 34);
      margin-left: calc(100% - 70px)
    }
    width: 100%;
    padding: 0;
    font-size: 0.8em;
    max-width: 400px;
    @media (min-width: ${Sizes.xsPhone}) {
      font-size: 0.9em;
    }
    @media (min-width: ${Sizes.tablet}) {
      font-size: 1.1em;
    }
    @media (min-width: ${Sizes.laptop}) {
      padding: 0 50px;
      font-size: 1em;
    }
    .title{
      width: 100%;
      font-size: 1.7em;
      font-weight: 900;
      margin: 0 0 10px;
      @media (min-width: ${Sizes.laptop}) {
        font-size: 3em;
      }
    }
  }
  .hang{
    height: 200px;
    left: 30px;
    top: 0;
    position: absolute;
    z-index: 9099;
  }
`

const Inner3 = Inner.extend`
  background-color: #080461;
  height: auto;
  display: inline-block;
  font-size: 1em;
  text-align: left;
  padding: 40px 20px;
  padding-bottom: 200px;
 @media (min-width: ${Sizes.laptop}) {
   width: 50%;
   height: 100%;
   padding-bottom: 20px;
 }
 .box-content{
   width: 100%;
   color: white;
   padding: 0;
   font-size: 0.8em;
   max-width: 500px;
   @media (min-width: ${Sizes.xsPhone}) {
     font-size: 0.9em;
   }
   @media (min-width: ${Sizes.tablet}) {
     font-size: 1.1em;
   }
   @media (min-width: ${Sizes.laptop}) {
     padding: 0 50px;
     font-size: 1em;
   }
   .title{
     width: 100%;
     font-size: 1.7em;
     font-weight: 900;
     margin: 0 0 10px;
     @media (min-width: ${Sizes.laptop}) {
       font-size: 3em;
     }
   }
 }

 .icon-section{
   h5{
     margin-bottom: 0px;
     margin-right: 10px;
     font-weight: 900;
   }
   .icon-container{
     display: inline-flex;
     margin: 10px 0;
     text-align: center;
     justify-content: center;
     align-items: center;
     position: relative;
     cursor: pointer;
     p{
       display: none;
       position: absolute;
       transform: rotate(-90deg);
       transform-origin: bottom right;
       margin: 0;
       padding: 0;
       bottom: -6px;
       right: 14px;
       font-size: 1em;
     }
     &:hover p{
       display: block;
     }
     i{
       font-size: 1.5em;
       margin: 0 10px 0 0;
       @media (min-width: ${Sizes.laptop}) {
       }
     }
   }
 }
`
