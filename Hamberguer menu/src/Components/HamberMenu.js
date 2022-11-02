import React, { Component } from "react";
import Header from "./Header";
import styled from "styled-components";

const Div = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  allign-items: center;
  z-index: 99;
  position: fixed;
  top: 20px;
  left: 25px;
  cursor: pointer;
  display: none;
  div {
    width: 100%;
    height: 0.25rem;
    border-radius: 30px;
    background-color: ${(props) => (props.open ? "white" : "lightblue")};
    transform-origin: 10%;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(-100%)" : "translatex(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (max-width: 600px) {
    display: flex;
  }
`;
class HamberMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  MenuHandeler = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    return (
      <>
        <Div open={this.state.open} onClick={this.MenuHandeler}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Header open={this.state.open} />
      </>
    );
  }
}

export default HamberMenu;
