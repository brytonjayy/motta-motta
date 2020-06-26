import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { WiredCard } from "wired-card"
import { WiredImage } from "wired-image"
import { WiredButton } from "wired-button"

import Img0 from "./images/img-0.jpg";
import Img1 from "./images/img-1.jpg";
import Img2 from "./images/img-2.jpg";


export const Card = ({ text, source, imgSrc }) => {
    const imgCard = {
      height: "35vw",
      float: "right"
    }

    const quoteText = {
      fontSize: "1.5em",
      textAlign: "justify",
      width: "35vw",
      float: "left"
    }

    return (
      <div>
        <wired-card >
        <h4>What Women are Saying:</h4>
          <wired-image style={imgCard} src={imgSrc} />
          <p style={quoteText}>"{text}"</p>
          <i>-{source}</i>
        </wired-card>
      </div>
    );
};

export const Button = ({ onClick, text }) => {

    return (
      <div>
        <button onClick={onClick}>{text}</button>
      </div>
	);
};

export const Main = () => {
  const imgCard = {

  }
  return (
    <wired-card>

      <h1>Why Boudoir?</h1>
      <h4>INTIMATE AND EMPOWERING PHOTOGRAPHY OF AND FOR WOMEN.</h4>
      <wired-image style={imgCard} src={Img0} />

      <h4>Boudoir is a specialized service celebrating women, their femininity, and their self image. It is an intimate photography genre where women are clothed in lingerie or bedroom sheets. But above all, boudoir is empowerment, self love and celebration.</h4>
      <wired-image style={imgCard} src={Img1} />

      <h4>  The message I want to convey in my brand as a whole is not only that women are beautiful but that no matter what shape or size they are, no matter how "old", no matter their past traumas and feeling about their bodies, they can love themselves completely and they can find power from being vulnerable. Women who work with me not only feel powerful in the moment but can reflect on that feeling time and time again.</h4>
      <wired-image style={imgCard} src={Img2} />

    </wired-card>
  );
};
