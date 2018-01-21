import React, { Fragment } from "react";
import styled from "react-emotion";
import { FancyH1 } from "../FancyHeader/FancyHeader";

const H2 = styled("h2")`
  margin: 0;
  padding: 0;
`;

const Text = styled("p")`
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  line-height: 1.8em;

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
    const experience = currentYear - 2010;
    return (
      <div className={this.props.className}>
        <FancyH1>Hi, I{"'"}m Alex</FancyH1>
        <H2>Senior JavaScript developer,</H2>
        <H2>based in Wrocław</H2>
        <Text style={{ marginTop: 20 }}>
          {experience} years of professional expertise in web development and
          creating complex SPAs.
        </Text>
        <Text>
          I interviewed over 30 engineers and was actively involved in sharing
          knowledge and good practices in companies I worked for. Focused on
          performance and maintainability, simplifying processes and getting
          things done.
        </Text>
        <Text>
          Currently interested in{" "}
          {this.props.techs.map((tech, index) => {
            const isLast = index === this.props.techs.length - 1;
            return (
              <Fragment key={tech.href}>
                {isLast && "and "}
                <a
                  className="animated"
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tech.label}
                </a>
                {!isLast && ", "}
              </Fragment>
            );
          })}
        </Text>
      </div>
    );
  }
}
