import React from "react";
import "./Details.css";
import codingtag from "../codingTag.png";
import panindia from "../Panindia.png";
import Free from "../Freetag.png";
import { useLocation, useParams } from "react-router-dom";
import Register from "../Register.svg";
export default function Details() {
  const params = useParams();
  const location = useLocation();
  const { detail } = location.state;
  return (
    <div className="details-box">
      <div className="Upper_Box">
        <img src={detail.imgsrc} alt="Okayy" />

        <div>
          <div className="right_box">
            <div className="tc club_title">{detail.organizer}</div>
            <div className="details_about">About</div>
            <div className="details_details">{detail.details}</div>
            <div className="tag_details">
              <img src={Free} />
              <img src={panindia} />
              <img src={codingtag} />
            </div>
          </div>
        </div>
      </div>
      <div className="Event_Details">Event Details</div>
      <div className="Info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nulla metus, quis libero elit, sollicitudin quis. Lorem nibh porta
        varius suspendisse. Magnis lectus leo, et, habitasse pulvinar elit.
        Congue est sed commodo suspendisse a sagittis in varius. Feugiat
        ullamcorper id malesuada elit purus. Sem a, cras eget quis tincidunt
        eleifend senectus viverra. Faucibus ultricies mauris semper porta.
        Vulputate aliquam nullam integer tellus tellus lorem.
      </div>
      <div className="Rules_Plans">Rules/Plans</div>
      <div className="Info">
        1.)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nulla metus <br />
        <br /> 2.) quis libero elit, sollicitudin quis. Lorem nibh porta varius
        suspendisse. Magnis lectus leo, et
        <br />
        <br />
        3.) habitasse pulvinar elit. Congue est sed commodo suspendisse a
        sagittis in varius. Feugiat ullamcorper id malesuada elit purus. <br />
        <br />
        4.)Sem a, cras eget quis tincidunt eleifend senectus viverra. Faucibus
        ultricies mauris semper porta. Vulputate aliquam nullam integer tellus
        tellus lorem.
      </div>
      <div className="Reward_Details">Reward_Details</div>
      <div className="Info">
        1.)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nulla metus <br />
        <br /> 2.) quis libero elit, sollicitudin quis. Lorem nibh porta varius
        suspendisse. Magnis lectus leo, et
        <br />
        <br />
        3.) habitasse pulvinar elit. Congue est sed commodo suspendisse a
        sagittis in varius. Feugiat ullamcorper id malesuada elit purus. <br />
        <br />
        4.)Sem a, cras eget quis tincidunt eleifend senectus viverra. Faucibus
        ultricies mauris semper porta. Vulputate aliquam nullam integer tellus
        tellus lorem.
      </div>
      <div className="Date_of_Event">Date of Events</div>
      <div className="Date_of_Event">11 th October 2022</div>
      <div className="tc grow pointer REGISTER">
        <img style={{ width: "400px" }} src={Register} />
      </div>
    </div>
  );
}
