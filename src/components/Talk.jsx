import React from "react";
import styled from "react-emotion";
import YoutubeIcon from "./Icons/YoutubeIcon";

const TalkContainer = styled("div")``;

const TalkVideoLink = styled("a")`
  box-shadow: none;
  opacity: 0.6;
  color: #89bcfe;

  :hover,
  :focus {
    opacity: 1;
  }

  span {
    display: none;
  }
`;

const TalkVideoIcon = styled(YoutubeIcon)`
  width: 25px;
  height: 25px;
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
`;

export default class Talk extends React.Component {
  render() {
    const { title, date, place, video, url, language } = this.props.talk;
    return (
      <TalkContainer>
        <div>
          <a target="_blank" href={url} rel="noopener noreferrer">
            {title} / <small>{language}</small>
          </a>
          {video && (
            <TalkVideoLink
              href={video}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TalkVideoIcon />
            </TalkVideoLink>
          )}
        </div>
        <small>
          {date}, {place}
        </small>
      </TalkContainer>
    );
  }
}
