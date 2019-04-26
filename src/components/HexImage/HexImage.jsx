import React from 'react';

export default class HexImage extends React.Component {
  render() {
    return (
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={this.props.className}
      >
        <title>{this.props.title}</title>
        <defs>
          <pattern
            id="img"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <image
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref={this.props.image}
              x="-25"
              width="150"
              height="100"
            />
          </pattern>
        </defs>
        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />
      </svg>
    );
  }
}
