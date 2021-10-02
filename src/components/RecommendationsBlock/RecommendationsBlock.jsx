import React from 'react';
import styled from '@emotion/styled';
import { FancyH2 } from '../FancyHeader/FancyHeader';
import Config from '../../../config';

const Container = styled('div')`
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

const linkedInLink = Config.userLinks.filter(
  (link) => link.type === 'linkedin'
);
const linkedInLinkValue = linkedInLink ? linkedInLink[0].href : '';

class RecommendationsBlock extends React.Component {
  constructor(props) {
    super(props);
    const min = 0;
    const max = props.recommendations.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1) + min);
    this.state = {
      index,
      maxIndex: max,
    };
  }

  onNextClick = () => {
    const maxIndex = this.state.maxIndex;
    const index = this.state.index;
    if (index < maxIndex) {
      this.setState({
        index: index + 1,
      });
    } else {
      this.setState({
        index: 0,
      });
    }
  };

  onPrevClick = () => {
    const maxIndex = this.state.maxIndex;
    const index = this.state.index;

    if (index > 0) {
      this.setState({
        index: index - 1,
      });
    } else {
      this.setState({
        index: maxIndex - 1,
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
        <div style={{ textAlign: 'center' }}>
          <button type="button" onClick={this.onPrevClick}>
            Prev
          </button>
          <button type="button" onClick={this.onNextClick}>
            Next
          </button>
        </div>
        <p>
          See all recommendations on{' '}
          <a href={linkedInLinkValue} target="_blank" rel="noopener noreferrer">
            my LinkedIn profile
          </a>
        </p>
      </Container>
    );
  }
}

export default RecommendationsBlock;
