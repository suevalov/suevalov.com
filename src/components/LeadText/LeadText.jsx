import React from "react";
import styled from "react-emotion";

const H1 = styled("h1")`
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  padding-left: 10px;
  position: relative;

  :before {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    left: -5px;
    bottom: -10px;
    background-color: #89bcfe;
    opacity: 0.6;
    border-radius: 50%;
    z-index: -2;
  }
`;

const H2 = styled("h2")`
  margin: 0;
  padding: 0;
`;

type LeadTextProps = {
  className?: string
};

export default class LeadText extends React.Component<LeadTextProps> {
  render() {
    return (
      <div className={this.props.className}>
        <H1>Hi, I{"'"}m Alex</H1>
        <H2>Senior JavaScript developer,</H2>
        <H2>based in Wrocław</H2>
      </div>
    );
  }
}
