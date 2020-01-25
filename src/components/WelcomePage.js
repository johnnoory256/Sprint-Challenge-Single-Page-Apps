import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import rick from "../image/rick.jpg";
const WelcomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .main-content {
        margin-top: 3rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        img {
            width: 40%;
        }
    
        nav {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                color: #0fefe2;
                font-size: 1.8rem;
                font-weight: bold;
                background: #222937;
                height: 8rem;
                width: 20rem;
                border: none;
                border-radius: 0.5rem;
                transition: all 1s;
                &:hover {
                    transition: color, background 0.4s;
                    background: #0Fd0Fd;
                    color: #222937;
                    cursor: pointer;
                }
            }
        }
    }
`;

export default function WelcomePage() {
  return (
    <WelcomeContainer>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      </header>
      <div className="main-content">
      <img src={rick} />
        <nav>
          <Link to="/characters"><button>Character List</button></Link>
        </nav>
      </div>
    </WelcomeContainer>
  );
}