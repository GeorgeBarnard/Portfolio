import React, { Component } from 'react';
import RouterComponent from './RouterComponent'
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'

import image from '../img/related1.png'
import image2 from '../img/related2.png'


 class Labs extends Component {
  constructor() {
   super()
   this.state = {
     user: null
   }
 }

componentDidMount(){
  window.scrollTo(0,0);
}

 rightClick(){
     this.props.history.push('/')
 }

render() {

    return (
      <Outer color={'rgba(255, 255, 255, 1)'}>
        <Inner>
          <h1>Labs</h1>
          <h4>Current Project:</h4>
          <h2>Related</h2>
          <section className='button-section'>
            <a target="_blank" href='https://sleepy-citadel-82119.herokuapp.com/'><button>Live Site <i className="material-icons">web</i></button></a>
            <a target="_blank" href='https://github.com/GeorgeBarnard/Related---React-Spotify-App'><button>View on GitHub <i className="devicon-github-plain"></i></button></a>
          </section>
          <p>Related is a Spotify based related artist finder and playlist creator. It came about when the company I was working for at the time needed me to look into making API calls within a React project. So I guess you could call it a fairly simple exercise that got out of hand.. <br /><br /> I had been working with React for around a year at this point, and I knew the environment very well, however on all previous projects we used Firebase as a back end, which has similar calls, but uses a different method for obtaining data.</p>
          <img src={image}></img>
          <p>
            The project is created with the massively popular create-react-app, I then added my default collection of react packages: React Router v4, Css-transitions, Styled-components and in this case we use Axios to make the Api calls. I decided against Redux on this project as I didn’t see that it would be necessary with the low number of components used.
          <br/><br/>
          In terms of interface design, the layout is heavily influenced by the return of rounded corners and box shadows to modern user interfaces (e.g. iOS.11 store). Translucent background images that fill the screen have become a favourite of mine, in this case it allows the whole page to look completely different when you open each artist and I think it works pretty effectively. <br/><br/>
          Recently a lot of my time has been spent trying to perfect animated transitions between elements. For the open artist transition that is triggered when clicking a single card, I would originally have just added and removed a ‘toggled’ CSS class to the new full screen element, this would then animate the CSS ‘top’ attribute. This is bad. Neither adding and removing classes or animating the top attribute is computant or recommended by react.<br/> <br/>
          Fortunately Styled-components offers perfect functionality for transition based on a state change. As the markup for styled components is built with strings, we are able to inject javascript variables into our CSS using template literals. We can then use Es6 conditional statements to return a different value based upon the passed property or state. Like this...
          </p>
          <iframe src="//jsfiddle.net/3eawtd1m/embedded/js/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>
          <p>It’s also worth mentioning that by using transforms instead of animating a positional value (e.g. top, left), we can get much smoother transitions. This is mainly down to browsers being able to use hardware acceleration for the transform, opacity and filter properties. </p>
          <img src={image2}></img>
          <p>
            Using the Spotify Api was a relatively painless experience, they offer hundreds of endpoints and return well curated information. The auth flow was less enjoyable, however I would probably put this down to having used Google’s oAuth service many times and simply being unfamiliar with Spotify’s environment. In the future I would definitely like to explore more of the available options and build the application out. <br/><br/>
            Related is really a very simple application, built with the intention of having a smooth user experience. Regrettably I am sure there are still bugs, and there is very little in the way of error checking, but this is not a production application. It is however definitely a start and if, by some miracle, you found the project then go ahead and make it your own! <br/><br/>
            George
          </p>
        </Inner>
        <LinkRight onClick={() => this.rightClick()}><i className="material-icons">arrow_back</i><i className="material-icons">home</i><span>Home</span></LinkRight>
      </Outer>
    );
  }
}

export default withRouter(Labs);

const Sizes = {
  desktop: (1100 + 'px'),
  laptop: (992 + 'px'),
  tablet: (768 + 'px'),
  phone: (564 + 'px'),
  xsPhone: (376 + 'px')
}

const Outer = styled.section`
width: 100%;
min-height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: ${props => props.color};
z-index: 99;
padding: 0;
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
text-align: center;
pre code{
  display: block;
    padding: 0.5em;
    color: #333;
    background: #f8f8ff;
}
`

const Inner = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 50px 35px 150px;
  box-sizing: border-box;
  @media (min-width: ${Sizes.laptop}) {
    padding: 50px 50px 150px;
  }
  h1{
    font-size: 3em;
    margin: 0;
  }
  h2{
    margin: 5px 0;
    @media (min-width: ${Sizes.laptop}) {
      margin-top: 20px;
    }
  }
  p{
    margin: 10px auto;
    width: 100%;
    text-align: left;
    line-height: 24px;
    @media (min-width: ${Sizes.laptop}) {
      width: 50%;
    }
  }
  img{
    width: 90%;
    margin: 0;
    @media (min-width: ${Sizes.laptop}) {
      margin-top: -50px;
      width: 50%;
    }
  }
  iframe{
    display: block;
    margin: 30px auto;
    width: 90%;
    max-width: 90%;
    @media (min-width: ${Sizes.laptop}) {
      width: 50%;
    }
  }
  .button-section{
    width: 100%;
    button{
      font-size: 1em;
      height: 50px;
      margin: 5px;
      padding: 10px 20px;
      outline: none;
      border: none;
      background-color: #09e076;
      i{
        font-size: 1.3em;
        vertical-align: -3.5px;
      }
      @media (min-width: ${Sizes.laptop}) {
        margin: 20px 5px;
      }
    }
  }
`
const LinkRight = styled.section`
width: 50px;
height: 50px;
background-color: #F2EA1E;
position: fixed;
top: 15px;
left: 15px;
z-index: 399;
span{margin-left: 3px}
@media (min-width: ${Sizes.laptop}) {
  top: 90vh;
  left: 30px;
}
`
