import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";
import Details from "../pages/Details";
import "./ListItem.css";
import codingtag from "../codingTag.png";
import panindia from "../Panindia.png";
import Explore from "../Explore.png";
export default function ListItem(props) {
  return (
    <div className="list-box dib">
      <div className="content">
        <img src={props.detail.imgsrc} alt="" className="poster-avatar" />
        <h3 className="title b">{props.detail.title}</h3>
      </div>
      <p className="about-event">{props.detail.about}</p>
      <div className="bottom_tag">
        <div className="club-logo">
          <img src={props.detail.clublogo} />
        </div>
        <div className="tag">
          <img src={codingtag} />
          <img src={panindia} />
        </div>
      </div>
      <div className="explore_button">
        <Link
          to={`/details/${props.detail.id}`}
          state={{ detail: props.detail }}
        >
          <img src={Explore} className="pointer grow tc" />
        </Link>
      </div>
    </div>
  );
}
