import React from 'react';
import styled from '@emotion/styled';

const SkillBarRoot = styled('div')`
  margin-bottom: 10px;
`;

const SkillTitle = styled('div')`
  font-size: 0.8em;
`;

const SkillValue = styled('div')`
  margin-top: 5px;
  width: 100%;
  border-bottom: 2px solid #555;
  border-top: 1px solid #ddd;
  height: 8px;
`;

const SkillValueBar = styled('div')`
  display: block;
  transition: width 0.7s ease;
  width: ${(props) => `${props.width}%`};
  height: 8px;
  background-color: #89bcfe;
  opacity: 0.6;
`;

export default class SkillBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 100);
  }

  render() {
    return (
      <SkillBarRoot>
        <SkillTitle>{this.props.title}</SkillTitle>
        <SkillValue>
          <SkillValueBar
            className="bar-inner"
            width={this.state.mounted ? this.props.value : 0}
          />
        </SkillValue>
      </SkillBarRoot>
    );
  }
}
