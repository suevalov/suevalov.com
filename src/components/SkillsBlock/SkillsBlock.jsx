import React from "react";
import { FancyH2 } from "../FancyHeader/FancyHeader";
import SkillBar from "./SkillBar";

export default class SkillsBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Skills</FancyH2>

        <h4 style={{ marginTop: 10 }}>Development</h4>

        <SkillBar value={95} title="Javascript" />
        <SkillBar value={95} title="React" />
        <SkillBar value={90} title="CSS" />
        <SkillBar value={85} title="Redux, Mobx" />
        <SkillBar value={80} title="Node.js" />
        <SkillBar value={75} title="React Native" />
        <SkillBar value={65} title="Vue" />
        <SkillBar value={50} title="Database Modelling" />
        <SkillBar value={40} title="Ruby on Rails" />
        <SkillBar value={35} title="Java" />

        <h4>Design</h4>
        <SkillBar value={80} title="Design Systems" />
        <SkillBar value={75} title="UX" />
        <SkillBar value={60} title="Photoshop" />
        <SkillBar value={20} title="Sketch" />

        <h4>Personal</h4>
        <SkillBar value={90} title="Self Management" />
        <SkillBar value={90} title="Proactivity" />
        <SkillBar value={75} title="Creativity" />
        <SkillBar value={70} title="Communication" />
        <SkillBar value={65} title="Team Player" />

        <h4>Languages</h4>
        <SkillBar value={100} title="Russian" />
        <SkillBar value={85} title="English" />
        <SkillBar value={20} title="Polish" />
        <SkillBar value={10} title="German" />
      </React.Fragment>
    );
  }
}
