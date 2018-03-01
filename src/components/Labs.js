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
          <p>Current Project:</p>
          <h2>Related</h2>
          <section className='button-section'>
            <a><button>Live Site <i className="material-icons">web</i></button></a>
            <a><button>View on GitHub <i className="devicon-github-plain"></i></button></a>
          </section>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis quam iaculis, elementum elit sit amet, luctus orci. Mauris sit amet sapien eros. Duis lacus est, fringilla ac dui eget, suscipit luctus sapien. Duis non purus a nulla euismod consectetur ultricies ut est. Quisque non ligula ante. Nunc nisi ante, tincidunt ac ante vitae, eleifend hendrerit augue. Praesent pharetra vel metus euismod ultrices. Donec sed vulputate tellus, in pharetra nisl. Sed volutpat eros aliquam arcu finibus maximus.
          </p>
          <img src={image}></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis quam iaculis, elementum elit sit amet, luctus orci. Mauris sit amet sapien eros. Duis lacus est, fringilla ac dui eget, suscipit luctus sapien. Duis non purus a nulla euismod consectetur ultricies ut est. Quisque non ligula ante. Nunc nisi ante, tincidunt ac ante vitae, eleifend hendrerit augue. Praesent pharetra vel metus euismod ultrices. Donec sed vulputate tellus, in pharetra nisl. Sed volutpat eros aliquam arcu finibus maximus.<br/><br/>
          Morbi id gravida dui. Pellentesque laoreet volutpat ipsum, at malesuada lacus. Integer porttitor tempus leo, eu tincidunt eros dignissim vel. Aenean vestibulum luctus dolor accumsan aliquam. Ut ac mollis massa, sit amet rutrum ante. Suspendisse tempus turpis dolor, tempus gravida leo pulvinar eu. Aliquam erat volutpat. Nullam ornare ligula et odio hendrerit, ut scelerisque tortor interdum. Nulla consequat iaculis magna, venenatis sagittis ligula porttitor a. Aliquam aliquet viverra sem   volutpat sagittis. Vestibulum ut varius lacus.<br/><br/>
          Donec enim erat, vehicula ut ullamcorper nec, cursus eget eros. Vestibulum tristique nunc id laoreet fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pharetra vehicula elit, nec sollicitudin elit gravida nec. Donec varius, orci ut accumsan convallis, ante ex iaculis lorem, mollis rutrum nisl elit in libero. Sed scelerisque lacus at nisl facilisis, dignissim lacinia eros porta. Etiam porta erat at vulputate commodo. Nunc tincidunt velit ut diam pellentesque tempus. Aenean a ex eu nulla volutpat sagittis ut quis ante. Mauris varius dictum augue sed finibus. Aenean rutrum malesuada nisi non congue. In eu fringilla odio, at molestie velit.
          </p>
            <img src={image2}></img>
          <p>
            Etiam pretium commodo arcu sed egestas. Aliquam interdum, ex quis varius interdum, nisl turpis sollicitudin enim, quis semper ante justo sit amet est. Phasellus et fringilla risus. Vivamus fringilla congue sem, quis consectetur velit ultricies sit amet. Curabitur pretium odio et ante lacinia, vel vehicula justo cursus. Praesent dapibus tortor vel pulvinar semper. Praesent pulvinar leo neque, ac tincidunt orci imperdiet tristique.<br/><br/>
            Proin non nisl et nulla vestibulum tristique. Nullam vestibulum, mauris et dignissim ornare, magna nibh feugiat nibh, molestie congue felis tortor convallis sapien. Aliquam nec dolor et tellus fringilla viverra. Aenean feugiat vehicula magna, eu dictum nibh placerat ut. Nam id purus tempor orci dapibus pretium at ut sapien. Nullam facilisis felis sed elit placerat, eget vulputate odio ullamcorper. Aenean tincidunt, turpis quis scelerisque iaculis, lorem sapien dictum sapien, vel pretium nisl lacus nec ex. Suspendisse ac suscipit risus.
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
`

const Inner = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 50px 50px 150px;
  box-sizing: border-box;
  h1{
    font-size: 3em;
    margin: 0;
  }
  h2{
    margin-bottom: 0;
  }
  p{
    margin: 0 auto;
    width: 90%;
    @media (min-width: ${Sizes.laptop}) {
      width: 50%;
    }
  }
  img{
    width: 90%;
    margin-top: -50px;
    @media (min-width: ${Sizes.laptop}) {
      width: 50%;
    }
  }
  .button-section{
    width: 100%;
    button{
      font-size: 1em;
      height: 50px;
      margin: 20px 5px;
      padding: 10px 20px;
      outline: none;
      background-color: green;
      i{
        font-size: 1.3em;
        vertical-align: -3.5px;
      }

    }
  }
`
const LinkRight = styled.section`
width: 50px; height: 50px; background-color: #F2EA1E; position: fixed; top: 90vh; left: 30px; z-index: 399;
span{margin-left: 3px}
@media (max-width: 992px) {
  top: 30px
}
`
