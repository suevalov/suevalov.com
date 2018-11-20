import React from "react";
import styled from "react-emotion";
import { DEFAULT_MEDIA_QUERY } from "typography-breakpoint-constants";
import { FancyH2 } from "../FancyHeader/FancyHeader";

const Heading = styled(FancyH2)`
  font-size: 1.2em;
  margin-bottom: 15px !important;
  margin-top: 0 !important;
`;

const Container = styled("div")`
  display: inline-block;
  float: right;
  margin-right: -100px;
  margin-left: 50px;

  ${DEFAULT_MEDIA_QUERY} {
    display: none;
  }

  ul li ul {
    display: none;
  }

  ul li p {
    margin-bottom: 0;
  }

  ul li {
    margin-bottom: 5px;
  }
`;

export default class TableOfContents extends React.Component {
  render() {
    return (
      <Container>
        <Heading>Table of Contents</Heading>
        <div dangerouslySetInnerHTML={{ __html: this.props.tableOfContents }} />
      </Container>
    );
  }
}
