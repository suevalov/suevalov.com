import React from "react";
import styled from "react-emotion";
import { FancyH2 } from "../FancyHeader/FancyHeader";

const Timeline = styled("section")`
  position: relative;
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
    width: 6px;
    margin: 0 auto;
    padding-top: 100px;
  }

  ul li::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background: white;
    border: 1px solid #ccc;
  }

  ul li div {
    position: relative;
    bottom: 0;
    width: 300px;
    padding: 15px;
  }

  ul li:nth-child(odd) div {
    left: 45px;
  }

  ul li:nth-child(even) div {
    left: -439px;
  }
`;

const Line = styled("div")`
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  z-index: -2;
  width: 1px;
  border-left: 1px dashed #ccc;
`;

export default class ExperienceBlock extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <FancyH2 style={{ marginLeft: "auto", marginRight: "auto" }}>
            Experience
          </FancyH2>
        </div>
        <Timeline>
          <Line />
          <ul>
            <li>
              <div>
                <time>1937</time> Proin quam velit, efficitur vel neque vitae,
                rhoncus commodo mi. Suspendisse finibus mauris et bibendum
                molestie. Aenean ex augue, varius et pulvinar in, pretium non
                nisi.
              </div>
            </li>
            <li>
              <div>
                <time>1937</time> Proin quam velit, efficitur vel neque vitae,
                rhoncus commodo mi. Suspendisse finibus mauris et bibendum
                molestie. Aenean ex augue, varius et pulvinar in, pretium non
                nisi.
              </div>
            </li>
            <li>
              <div>
                <time>1937</time> Proin quam velit, efficitur vel neque vitae,
                rhoncus commodo mi. Suspendisse finibus mauris et bibendum
                molestie. Aenean ex augue, varius et pulvinar in, pretium non
                nisi.
              </div>
            </li>
            <li>
              <div>
                <time>1937</time> Proin quam velit, efficitur vel neque vitae,
                rhoncus commodo mi. Suspendisse finibus mauris et bibendum
                molestie. Aenean ex augue, varius et pulvinar in, pretium non
                nisi.
              </div>
            </li>
          </ul>
        </Timeline>
      </div>
    );
  }
}
