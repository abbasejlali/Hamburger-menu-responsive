import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 1rem;
  z-inex: 20;
  li {
    padding: 0 1rem;
    cursor: pointer;
    &:hover {
      color: #3cf8a3;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 300px;
    height: 100vh;
    background-color: lightblue;
    position: fixed;
    top: 0;
    left: 0;
    padding: 4rem 0 0 0.5rem;
    margin-top: 0;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.2s linear;
    li {
      padding-top: 1.5rem;
      &:hover {
        color: rgb(0, 119, 30);
      }
    }
  }
`;
const Header = (props) => {
  return (
    <Ul open={props.open}>
      <li>Home Page</li>
      <li>Shop</li>
      <li>Blog</li>
      <li>Comments</li>
    </Ul>
  );
};

export default Header;
