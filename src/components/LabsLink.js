import React, { Component } from 'react';
import styled from 'styled-components';

import hang from '../img/hang2.png'

export default class LabsLink extends Component {

  render() {
    return (
      <Outer>
        <Image>
          <img src='http://kindling.xyz/wp-content/uploads/2016/07/Peter-Headshot-Square-1-e1478814843321.jpg'></img>
        </Image>
        <Labs>
          <h1>View My Code</h1>
          <h3>Visit My Github</h3>
          <h5>To The Labs! </h5>
        <GitButton><i className="devicon-github-plain"></i> <i className="material-icons">arrow_forward</i></GitButton>
        </Labs>
      </Outer>
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

const Outer = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  background-color: #fff;
  color: white;
  justify-content: flex-end;
  @media (min-width: ${Sizes.desktop}) {
    width: 60%;
  }
`
const Labs = styled.section`
  width: 50%;
  background-color: #080461;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: right;
  padding: 0 5vw;
  box-sizing: border-box;
h1{
  font-size: 1.2em;
  width: 100%;
  margin: calc(10% + 5px) auto 5px;
  @media (min-width: ${Sizes.tablet}) {
    font-size: 2em;
  }
  @media (min-width: ${Sizes.desktop}) {
    font-size: 3em;
    margin: 20px auto 5px;
  }
}
h3{
  font-size: 0.9em;
  width: 100%;
  margin: 10px auto; 10px;
  font-weight: 500;
  @media (min-width: ${Sizes.tablet}) {
    font-size: 1.1em;
  }
  @media (min-width: ${Sizes.desktop}) {
    font-size: 1.75em;
  }
}
h5{
  margin: 5px auto 10px;
  font-size: 0.7em;
  width: 100%;
  font-weight: 500;
  @media (min-width: ${Sizes.desktop}) {
    font-size: 1.35em;
    margin: 5px auto 20px;
  }
}
img{
  height: 200px;
  position: absolute;
  right: 50px;
  top: -4px;
  z-index: 9999;
}
`

const Image = styled.section`
  width: 50%;
  padding: 5%;
  background-color: #09e076;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  img{
    width: 100%;
    max-width: 350px;
    float: right;
    filter: grayscale(0.5);
  }
  @media (min-width: ${Sizes.desktop}) {
    padding: 30px;
  }
`

const GitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  background-color: #09e076;
  color: rgb(24, 24, 24);
  padding: 5px;
  float: right;
  border: none;
  @media (min-width: ${Sizes.desktop}) {
    font-size: 1.5em;
  }
`
