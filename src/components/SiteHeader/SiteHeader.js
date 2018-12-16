import React, { Component } from "react";
import './SiteHeader.css'
import styled from "styled-components";
import navBars from "../../images/baseline_menu_black_18dp.png";
import MainNav from '../../components/MainNav/MainNav';
import { Link } from 'react-router-dom';

const Header = styled.header`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 5vw 0 5vw;
  border-bottom: 1px solid #ededef;
  background-color: white; */
  position: absolute;
  display: block;
  width: 100%;
  height: 10vh;
`;

const Title = styled.h1`
  font-size: 16px;
  color: #131313;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: "Krona One", sans-serif;
  text-align:left;
`;

class SiteHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  //responsible for opening and closing the nav
  handleNavClick() {
    this.setState(prev => ({
      visible: !prev.visible
    }));
  }

  render() {
    return (
      <div>
        <Header>
          <div className="containImage">
          <Link to='/'><Title>SOIL + WATER</Title></Link>
            <img className="image" src={navBars} onClick={this.handleNavClick} alt="" />
          </div>
        </Header>

        <MainNav 
            visible={this.state.visible}
            handleNavClick={this.handleNavClick}
        />
      </div>
    );
  }
}

export default SiteHeader;
