import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <h4>{copyright}</h4>

          <Link to={url}>
            <button>Subscribe</button>
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
