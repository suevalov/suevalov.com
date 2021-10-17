/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
  en: 'English',
  ru: 'Russian',
};

const Language = () => (
  <div>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map((language) => (
          <a
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              color: currentLocale === language ? `blue` : `black`,
              margin: 10,
              cursor: `pointer`,
            }}
          >
            {languageName[language]}
          </a>
        ))
      }
    </IntlContextConsumer>
  </div>
);

export default Language;
