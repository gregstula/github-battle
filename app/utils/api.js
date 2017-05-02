/*
 * api.js
 * Copyright (C) 2017 g <g@FreeBSD64>
 *
 * Distributed under terms of the MIT license.
 */
import axios from 'axios';

const api = {
    fetchPopularRepos: (language) => {
      let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
      return axios.get(encodedURI)
        .then((res) => {
          return res.data.items;
        });
  }
};

export default api;
