import React from 'react';
import { FormattedMessage, IntlContextConsumer } from 'gatsby-plugin-intl';
import { FancyH2 } from '../FancyHeader/FancyHeader';
import SkillBar from './SkillBar';

export default class SkillsBlock extends React.Component {
  render() {
    return (
      <IntlContextConsumer>
        {({ language: currentLocale }) => {
          const labelKey = currentLocale === 'ru' ? 'label_ru' : 'label';
          return (
            <>
              <FancyH2>
                <FormattedMessage id="skills" />
              </FancyH2>

              <h4 style={{ marginTop: 10 }}>
                <FormattedMessage id="development" />
              </h4>
              {this.props.developmentSkills.map((skill) => (
                <SkillBar
                  key={skill.label}
                  value={skill.value}
                  title={skill[labelKey] || skill.label}
                />
              ))}

              <h4>
                <FormattedMessage id="design" />
              </h4>
              {this.props.designSkills.map((skill) => (
                <SkillBar
                  key={skill.label}
                  value={skill.value}
                  title={skill[labelKey] || skill.label}
                />
              ))}

              <h4>
                <FormattedMessage id="personal" />
              </h4>
              {this.props.personalQualities.map((quality) => (
                <SkillBar
                  key={quality.label}
                  value={quality.value}
                  title={quality[labelKey] || quality.label}
                />
              ))}

              <h4>
                <FormattedMessage id="languages" />
              </h4>
              {this.props.languages.map((language) => (
                <SkillBar
                  key={language.label}
                  value={language.value}
                  title={language[labelKey] || language.label}
                />
              ))}
            </>
          );
        }}
      </IntlContextConsumer>
    );
  }
}
