import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom'
import styled from 'styled-components';

class App extends Component {
  constructor() {
   super()
   this.state = {
     toggled: false
   }
 }

  Click(location){
    this.props.scroll(location)
    this.toggleMenu()
  }
  gitClick(){
    this.props.history.push('/labs')
    this.toggleMenu()
  }
  toggleMenu(){
    this.state.toggled ?
    this.setState({toggled: false}) :
    this.setState({toggled: true})
  }


  render() {
    return (

          <LinkSection toggled={this.state.toggled}>
            <MenuButton onClick={() => this.toggleMenu()}><i className="material-icons">menu</i></MenuButton>
            <LinkLeft col={'white'} bg={'#0f0f0f'} onClick={() => this.gitClick()}><i className="devicon-github-plain"></i><i className="material-icons">arrow_forward</i><span>Git</span></LinkLeft>
            <LinkLeft col={'white'} bg={'#002e67'} onClick={() => this.Click('Bio')}><i className="material-icons">person</i><i className="material-icons">arrow_downward</i><span>Bio</span></LinkLeft>
            <LinkLeft col={'#131313'} bg={'#45e26b'} onClick={() => this.Click('Work')}><i className="material-icons">work</i><i className="material-icons">arrow_downward</i><span>Work</span></LinkLeft>
            <LinkLeft col={'white'} bg={'#002e67'} onClick={() => this.Click('Contact')}><i className="material-icons">phone</i><i className="material-icons">arrow_downward</i><span>Con</span></LinkLeft>
            <LinkLeft col={'black'} bg={'white'} onClick={() => this.Click('Slider')}><i className="material-icons">add_to_queue</i><i className="material-icons">arrow_downward</i><span>More</span></LinkLeft>
          </LinkSection>

    );
  }
}

export default withRouter(App);


const Sizes = {
  desktop: (1100 + 'px'),
  laptop: (992 + 'px'),
  tablet: (768 + 'px'),
  phone: (564 + 'px'),
  xsPhone: (376 + 'px')
}


const LinkSection = styled.section`
  width: 50px;
  cursor: pointer;
  background-color: rgb(255, 230, 0);
  position: fixed;
  right: 10px;
  bottom: ${props => props.toggled ? '0px' : '-300px'};
  transition: 0.5s ease-in-out;
  z-index: 99999;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${Sizes.laptop}) {
    right: 20px;
    padding-bottom: 0px;
  }
`

const MenuButton = styled.button`
  background-color: rgb(255, 230, 0);
  color: rgb(31, 31, 31);
  width: 50px;
  height: 50px;
  border: none;
  margin-bottom: 10px;
  &:focus{
    outline: none;
  }
  &:hover{
    background-color: rgb(224, 204, 21);
  }
  ${'' /* @media (min-width: ${Sizes.laptop}) {
    display: none;
  } */}
`

const LinkLeft = styled.section`
  width: 100%;
  height: 50px;
  position: relative;
  background-color: ${props => props.bg};
  color: ${props => props.col};
  margin-bottom: 10px;
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
