import React from 'react';
import styled from '@emotion/styled';
import { FancyH2 } from '../FancyHeader/FancyHeader';

const Timeline = styled('section')`
  position: relative;
  margin-top: 30px;
  min-height: 600px;
  width: 100%;
  font-size: 0.9em;
  font-family: 'Montserrat', 'Helvetica Neue', serif;

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style-type: none;
    position: relative;
    margin: 0;
    max-width: 330px;
    margin-left: 110px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 50px;
  }

  ul li::after {
    content: '';
    position: absolute;
    left: -60px;
    top: 1px;
    transform: translateX(-50%);
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background: white;
  }
`;

const Event = styled('div')`
  position: relative;
  bottom: -2px;
  padding: 0;
  margin: 0;
`;

const EventTime = styled('div')`
  height: 30px;
  width: 120px;
  position: absolute;
  left: -120px;
  text-align: center;
  top: 1px;
  z-index: 99;
  font-size: 0.85em;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;

  time {
    position: relative;
  }
  time:before {
    content: '';
    width: 100%;
    height: 7px;
    position: absolute;
    left: -5px;
    bottom: 0px;
    background-color: #89bcfe;
    opacity: 0.6;
    z-index: -2;
  }
`;

const EventTitle = styled('div')`
  font-size: 1.1em;
`;

const MoveToEvent = styled('div')`
  font-size: 0.9em;
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
  color: #888;
  display: inline-block;
`;

const EventSubtitle = styled('div')`
  font-size: 0.9em;
  color: #999;
  padding-left: 10px;
  line-height: 0.9em;
`;

const EventDescription = styled('div')`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 0.9em;
  line-height: 1.3em;
  font-family: 'Open Sans', 'Helvetica Neue', serif;
`;

const Line = styled('div')`
  position: absolute;
  left: 50px;
  top: -40px;
  height: 100%;
  z-index: -2;
  width: 1px;
  border-left: 2px solid #000;
`;

export default class ExperienceBlock extends React.Component {
  render() {
    return (
      <>
        <FancyH2>Experience</FancyH2>
        <Timeline>
          <Line />
          <ul>
            <li>
              <EventTime>
                <time>Feb 2022 - now</time>
              </EventTime>
              <Event>
                <EventTitle>Senior Software Engineer</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.linear.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linear
                  </a>
                  , Remote
                </EventSubtitle>
                <EventDescription>
                  Building a next generation project management tool.
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Feb 2020 - Jan 2022</time>
              </EventTime>
              <Event>
                <EventTitle>Staff Software Engineer</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.contentful.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contentful
                  </a>
                  , Berlin
                </EventSubtitle>
                <EventDescription>
                  Leading different org-wide techinical initiatives.
                  <br />
                  <br />
                  Leading a refactoring of the web app from Angular to React.
                  <br />
                  <br />
                  Front-end chapter coordinator.
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Aug 2018 - Feb 2020</time>
              </EventTime>
              <Event>
                <EventTitle>Fullstack JavaScript Developer</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.contentful.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contentful
                  </a>
                  , Berlin
                </EventSubtitle>
                <EventDescription>
                  Building Extensibility features at Contentful. UI Extensions,
                  command line tools built with JavaScript/Typescript.
                  <br />
                  <br />
                  Leading a refactoring of the web app from Angular to React.
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Jul 2018</time>
              </EventTime>
              <Event>
                <MoveToEvent>Moved to Berlin, Germany</MoveToEvent>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Nov 2017 - Jun 2018</time>
              </EventTime>
              <Event>
                <EventTitle>Senior Front-end Developer</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.opera.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Opera Software
                  </a>
                  , Wroclaw
                </EventSubtitle>
                <EventDescription>
                  Helping Browser Team with refactoring and changing main Opera
                  product - Opera Browser. Supporting and developing different
                  Chromium extensions.
                  <br />
                  Stack: JavaScript, CSS, React.
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Jul 2016 - Oct 2017</time>
              </EventTime>
              <Event>
                <EventTitle>Front-end Team Lead</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://dataart.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DataArt
                  </a>
                  , Wroclaw
                </EventSubtitle>
                <EventDescription>
                  Being in charge of the architecture and implementation of
                  technically challenging web-projects projects for financial
                  and travel industries. Leading a team of 6 front-end
                  developers.
                  <br />
                  Stack: JavaScript, CSS, React, Redux, MobX.
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Jul 2016</time>
              </EventTime>
              <Event>
                <MoveToEvent>Moved to Wrocław, Poland</MoveToEvent>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Oct 2013 - Jun 2016</time>
              </EventTime>
              <Event>
                <EventTitle>Senior Front-end Developer</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://dataart.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DataArt
                  </a>
                  , Saint-Petersburg
                </EventSubtitle>
                <EventDescription>
                  Being involved in several projects for clients from travel and
                  financial industries.
                  <br /> The most remarkable project was for Skyscanner: a new
                  white label web application, feature-packed and customizable.
                  The product was translated into ~30 languages.
                  <br />
                  Stack: Java, Ruby, JavaScript, Backbone, Angular, React.
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Jul 2013</time>
              </EventTime>
              <Event>
                <MoveToEvent>Moved to Saint Petersburg, Russia</MoveToEvent>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Aug 2012 - Oct 2013</time>
              </EventTime>
              <Event>
                <EventTitle>Full-stack Developer</EventTitle>
                <EventSubtitle>Brand System, Cherepovets</EventSubtitle>
                <EventDescription>
                  Developing a platform for creating small social networks for
                  people with common interests. The service provided
                  communication channels for registered users, companies and
                  communities.
                  <br />
                  Stack: Java, Hibernate, Backbone, JavaScript.
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Jul 2012</time>
              </EventTime>
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
              <EventTime>
                <time>Sep 2010 - Dec 2011</time>
              </EventTime>
              <Event>
                <EventTitle>Front-end Developer</EventTitle>
                <EventSubtitle>ImBoss.ru, Cherepovets</EventSubtitle>
                <EventDescription>
                  Developing and building architecture for client side of
                  web-service for managing accounting processes in small
                  companies.
                </EventDescription>
              </Event>
            </li>
          </ul>
        </Timeline>
      </>
    );
  }
}
