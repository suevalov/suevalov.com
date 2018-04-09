/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";
import favicon from "./favicon.png";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: off */
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <link
            rel="preload"
            href="/static/open-sans-latin-400.cffb686d.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/montserrat-latin-400.501ce09c.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script>
            if (navigator && navigator.serviceWorker &&
            navigator.serviceWorker.getRegistrations){" "}
            {navigator.serviceWorker.getRegistrations().then(registrations => {
              for (var i = 0; i < registrations.length; i += 1) {
                registrations[i].unregister();
              }
            })}
          </script>
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
