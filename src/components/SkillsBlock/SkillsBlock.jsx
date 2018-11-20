import React from "react";
import { FancyH2 } from "../FancyHeader/FancyHeader";
import SkillBar from "./SkillBar";

export default class SkillsBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Skills</FancyH2>

        <h4 style={{ marginTop: 10 }}>Development</h4>
        {this.props.developmentSkills.map(skill => (
          <SkillBar key={skill.label} value={skill.value} title={skill.label} />
        ))}

        <h4>Design</h4>
        {this.props.designSkills.map(skill => (
          <SkillBar key={skill.label} value={skill.value} title={skill.label} />
        ))}

        <h4>Personal</h4>
        {this.props.personalQualities.map(quality => (
          <SkillBar
            key={quality.label}
            value={quality.value}
            title={quality.label}
          />
        ))}

        <h4>Languages</h4>
        {this.props.languages.map(language => (
          <SkillBar
            key={language.label}
            value={language.value}
            title={language.label}
          />
        ))}
      </React.Fragment>
    );
  }
}
