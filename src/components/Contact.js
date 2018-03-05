import React, { Component } from 'react';
import styled from 'styled-components';

import LabsLink from './LabsLink'

export default class Contact extends Component {

  render() {
    return (
      <Outer>
        <Inner>
        <h1>Contact me today</h1>
        <h3>george_barnard@ymail.com</h3>
        <h5>07917308444</h5>
        <h5 className='last'>Hammersmith, London</h5>
        </Inner>
        <LabsLink />
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
  flex-wrap: wrap;
  background-color: white;
  position: relative;
  color: white;
  background-color: #080461;
  padding-bottom: 10%;
  @media (min-width: ${Sizes.desktop}) {
  padding-bottom: 5%;
  }
`

const Inner = styled.section`
width: 100%;
box-sizing: border-box;
padding: 0 5vw;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: left;
background-color: #09e076;
color: rgb(23, 23, 23);
@media (min-width: ${Sizes.desktop}) {
  width: 40%;
}
h1{
  font-size: 1.5em;
  width: 100%;
  margin: 30px auto 0px;
  @media (min-width: ${Sizes.tablet}) {
    font-size: 2em;
    margin: 30px auto 5px;
  }
  @media (min-width: ${Sizes.desktop}) {
    font-size: 3em;
  }
}
h3{
  font-size: 0.6em;
  width: 100%;
  margin: 0px auto;
  font-weight: 500;
  @media (min-width: ${Sizes.tablet}) {
    margin: 10px auto;
    font-size: 1.1em;
  }
}
.last{
  margin-bottom: 30px;
  margin-top: 2.5px;
}
h5{
  margin: 5px auto 0px;
  font-size: 0.6em;
  width: 100%;
  font-weight: 500;
  @media (min-width: ${Sizes.tablet}) {
    font-size: 1.1em;
  }
}
img{
  width: 200px;
}
`
