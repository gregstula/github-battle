/*
 * select_language.js
 * Copyright (C) 2017 g <g@FreeBSD64>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react';

const SelectedLanguage = (props) => {
  let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
     <ul className="languages">
      {languages.map((lang) => {
        return (
          <li 
            style={lang === props.selectedLanguage ? { color: '#d0021b'} : null}
            key={lang} 
            onClick={props.onSelect(lang)}
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
}

export default SelectedLanguage;
