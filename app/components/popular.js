/*
 * popular.js
 * Copyright (C) 2017 g <g@FreeBSD64>
 *
 * Distributed under terms of the MIT license.
 */
import React from "react";
import SelectedLanguage from "./selected-language";
import api from "../utils/api";
import RepoGrid from "./repo-grid";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
  }

  // Lifecycle events
  componentDidMount() {
    // Ajax
    this.updateLanguage(this.state.selectedLanguage);
 }

  updateLanguage = (lang) => () => {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    api.fetchPopularRepos(lang)
      .then((res) => {
        this.setState(() => {
          return {
            repos: res
          }
        })
      })
  }

  render() {
    return (
      <div>
        <SelectedLanguage 
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos 
          ? <p>Loading...</p> 
          : <RepoGrid repos={this.state.repos} />}
      </div>
   );
  }
}

export default Popular;
