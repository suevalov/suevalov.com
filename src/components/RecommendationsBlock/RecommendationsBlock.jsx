import React from "react";
import styled from "react-emotion";
import { FancyH2 } from "../FancyHeader/FancyHeader";
import Config from "../../../config";

const Container = styled("div")`
  blockquote {
    min-height: 180px;
    border-left-width: 2px;
    margin: 0;
    margin-right: 10px;
    margin-bottom: 20px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    margin-right: 20px;
  }

  p {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9em;
  }
`;

const recommendations = [
  {
    text:
      "...He was articulate and clear in describing the available technical options. He had a broad knowledge of the available technologies which he used to arrive at well balanced architectural decisions. ",
    name: "Joe Sarre",
    position: "Senior Product Manager at Skyscanner"
  },
  {
    text:
      "...hard working engineer who can make future-proof decisions, quickly pick up new libraries and help his colleagues grow... I would highly recommend him to any team that needs a strong frontend lead.",
    name: "Sergey Titov",
    position: "Staff Software Engineer at LinkedIn"
  },
  {
    text:
      "Alex is always in pursuit of new technologies and can quickly come up with a fresh solution to your problem... He's perfectly capable of managing a team of developers and has experience with it.",
    name: "Alexander Antsiferov",
    position: "Project Manager at DataArt"
  }
];

const linkedInLink = Config.userLinks.filter(link => link.type === "linkedin");
const linkedInLinkValue = linkedInLink ? linkedInLink[0].href : "";

type Props = {
  recommendations: Array<{
    text: string,
    name: string,
    position: string
  }>
};

type State = {
  index: number,
  maxIndex: number
};

class RecommendationsBlock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const min = 0;
    const max = props.recommendations.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1) + min);
    this.state = {
      index,
      maxIndex: max
    };
  }

  onNextClick = () => {
    const maxIndex = this.state.maxIndex;
    const index = this.state.index;
    if (index < maxIndex) {
      this.setState({
        index: index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  };

  onPrevClick = () => {
    const maxIndex = this.state.maxIndex;
    const index = this.state.index;

    if (index > 0) {
      this.setState({
        index: index - 1
      });
    } else {
      this.setState({
        index: maxIndex - 1
      });
    }
  };

  render() {
    const recommendation = this.props.recommendations[this.state.index];
    return (
      <Container>
        <FancyH2>Recommendations</FancyH2>
        <blockquote>
          {recommendation.text}
          <br />
          <cite>
            {recommendation.name} / {recommendation.position}
          </cite>
        </blockquote>
        <div style={{ textAlign: "center" }}>
          <button onClick={this.onPrevClick}>Prev</button>
          <button onClick={this.onNextClick}>Next</button>
        </div>
        <p>
          See all recommendations on{" "}
          <a href={linkedInLinkValue} target="_blank" rel="noopener noreferrer">
            my LinkedIn profile
          </a>
        </p>
      </Container>
    );
  }
}

RecommendationsBlock.defaultProps = {
  recommendations
};

export default RecommendationsBlock;
