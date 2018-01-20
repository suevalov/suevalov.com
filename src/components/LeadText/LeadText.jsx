import React, { Fragment } from "react";
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

const Text = styled("p")`
  margin: 0;
  padding: 0;
  margin-top: 5px;
  font-size: 0.8em;
  line-height: 1.8em;
  font-family: "Montserrat", "Helvetica Neue", serif;

  strong {
    margin-left: 2px;
  }
`;

type LeadTextProps = {
  className?: string,
  techs: Array<{ label: string, href: string }>
};

export default class LeadText extends React.Component<LeadTextProps> {
  render() {
    const currentYear = new Date().getFullYear();
    const experience = currentYear - 2011;
    return (
      <div className={this.props.className}>
        <H1>Hi, I{"'"}m Alex</H1>
        <H2>Senior JavaScript developer,</H2>
        <H2>based in Wrocław</H2>
        <Text style={{ marginTop: 20 }}>
          {experience} years of professional expertise in web development and
          creating complex SPAs.
        </Text>
        <Text>
          I interviewed 30+ engineers and was actively involved in sharing
          knowledge and good practices in companies I worked for. Focused on
          performance, simplifying processes and getting things done.
        </Text>
        <Text>
          Currently interested in{" "}
          {this.props.techs.map((tech, index) => {
            if (index !== this.props.techs.length - 1) {
              return (
                <Fragment>
                  <strong>
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tech.label}
                    </a>
                  </strong>,{" "}
                </Fragment>
              );
            }
            return (
              <Fragment>
                and{" "}
                <strong>
                  <a href={tech.href} target="_blank" rel="noopener noreferrer">
                    {tech.label}
                  </a>
                </strong>.
              </Fragment>
            );
          })}
        </Text>
      </div>
    );
  }
}
