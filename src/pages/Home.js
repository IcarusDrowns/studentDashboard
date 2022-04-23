import React from "react";
import { Route, Routes } from "react-router-dom";
import ListItem from "../components/ListItem";
import Details from "./Details";
import "./Home.css";
import Clublogo from "../Clublogo.png";
import Poster from "../Poster.png";
import Logo from "../Logo.png";
export default function Home() {
  const details = [
    {
      title: "Lorem Ipsum",
      imgsrc: Poster,
      organizer: "ACM",
      clublogo: Clublogo,
      details:
        "itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      about:
        "itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      id: "event1",
    },
    {
      title: "Lorem Ipsum",
      imgsrc: Poster,
      organizer: "ACM",
      clublogo: Clublogo,
      details:
        "itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      about:
        " itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      id: "event2",
    },
    {
      title: "Lorem Ipsum",
      imgsrc: Poster,
      organizer: "ACM",
      clublogo: Clublogo,
      details:
        "itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      about:
        "itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      id: "event3",
    },
    {
      title: "Lorem Ipsum",
      imgsrc: Poster,
      organizer: "ACM",
      clublogo: Clublogo,
      details:
        "itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      about:
        " itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      id: "event4",
    },
    {
      title: "Lorem Ipsum",
      imgsrc: Poster,
      organizer: "ACM",
      clublogo: Clublogo,
      details:
        "itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      about:
        "itaque corrupti, eum numquam odio consectetur! Reprehenderit,autem! Laborum recusandae magnam nesciunt maiores eos!",
      id: "event5",
    },
  ];
  const listItems = details.map((detail, index) => (
    <ListItem detail={detail} key={index}></ListItem>
  ));
  return (
    <div className="HOME">
      <div className="Pramotion-box">
        <div className="navbar">
          <img src={Logo} />
          <nav>
            <div className="nav-item pointer grow mh3">Feedback</div>
            <div className="nav-item pointer grow m3">Category</div>
            <div className="nav-item pointer grow mh3">Clubwise</div>
            <div className="nav-item pointer grow mh3">Team</div>
          </nav>
        </div>
        <header className="coveringbox tc">
          <div className="Heading tc">Welcome To MUJ</div>
          <div className="Heading tc">Club Portal</div>
          <div className="lower-content tc">
            A Single place for all the club related news. where you can see the
            events that are going to take place and also register in it.
          </div>
        </header>
      </div>
      <div className="tc upcoming_events ">
        Upcoming Events
        <div>{listItems}</div>
      </div>
    </div>
  );
}
