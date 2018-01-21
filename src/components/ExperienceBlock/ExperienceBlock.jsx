import React from "react";
import styled from "react-emotion";
import { FancyH2 } from "../FancyHeader/FancyHeader";

const Timeline = styled("section")`
  position: relative;
  margin-top: 30px;
  min-height: 600px;
  width: 100%;
  font-size: 0.9em;

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style-type: none;
    position: relative;
    margin: 0;
    margin-left: 100px;
    padding-bottom: 50px;
  }

  ul li::after {
    content: "";
    position: absolute;
    left: -60px;
    top: 0;
    transform: translateX(-50%);
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background: white;
  }
`;

const Event = styled("div")`
  position: relative;
  bottom: 0;
  padding: 0;
  margin: 0;
  left: 20px;
`;

const EventTime = styled("time")`
  height: 30px;
  width: 120px;
  position: absolute;
  left: -120px;
  text-align: center;
  top: 0;
  z-index: 99;
  font-size: 0.9em;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
`;

const EventTitle = styled("div")``;

const EventSubtitle = styled("div")``;

const EventDescription = styled("div")``;

const Line = styled("div")`
  position: absolute;
  left: 40px;
  top: -40px;
  height: calc(100% - 50px);
  z-index: -2;
  width: 1px;
  border-left: 2px solid #000;
`;

export default class ExperienceBlock extends React.Component {
  render() {
    return (
      <div>
        <FancyH2>Experience</FancyH2>
        <Timeline>
          <Line />
          <ul>
            <li>
              <EventTime>Nov 2017</EventTime>
              <Event>
                <EventTitle>Senior Front-end Developer</EventTitle>
                <EventSubtitle>Opera Software, Wroclaw</EventSubtitle>
                <EventDescription />
              </Event>
            </li>
            <li>
              <EventTime>Jul 2016 - Oct 2017</EventTime>
              <Event>
                <EventTitle>Front-end Team Lead</EventTitle>
                <EventSubtitle>DataArt, Wroclaw</EventSubtitle>
                <EventDescription />
              </Event>
            </li>
            <li>
              <EventTime>Jul 2016</EventTime>
              <Event>
                <EventTitle>Moved to Wroclaw, Poland</EventTitle>
              </Event>
            </li>
            <li>
              <EventTime>Oct 2013 - Jun 2016</EventTime>
              <Event>
                <EventTitle>Senior Front-end Developer</EventTitle>
                <EventSubtitle>DataArt, Saint-Petersburg</EventSubtitle>
                <EventDescription />
              </Event>
            </li>
            <li>
              <EventTime>Jul 2016</EventTime>
              <Event>
                <EventTitle>Moved to Saint Petersburg, Russia</EventTitle>
              </Event>
            </li>
            <li>
              <EventTime>Aug 2012 - Oct 2013</EventTime>
              <Event>
                <EventTitle>Full-stack Developer</EventTitle>
                <EventSubtitle>Brand System, Cherepovets</EventSubtitle>
                <EventDescription />
              </Event>
            </li>
            <li>
              <EventTime>Jul 2012</EventTime>
              <Event>
                <EventTitle>
                  Graduate as Software Engineer Specialist
                </EventTitle>
                <EventSubtitle>
                  Saint-Petersburg Polytechnical University
                </EventSubtitle>
              </Event>
            </li>
            <li>
              <EventTime>Sep 2010 - Dec 2011</EventTime>
              <Event>
                <EventTitle>Front-end Developer</EventTitle>
                <EventSubtitle>ImBoss.ru, Cherepovets</EventSubtitle>
                <EventDescription />
              </Event>
            </li>
          </ul>
        </Timeline>
      </div>
    );
  }
}
