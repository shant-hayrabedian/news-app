"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFetchedSources = loadFetchedSources;

var _constants = require("./constants");

var _sourcesSliceAPI = require("../../../api/sourcesSliceAPI");

var stateUpdate = function stateUpdate(newState) {
  return {
    type: _constants.FETCH_SOURCES,
    payload: newState
  };
}; //action loader


function loadFetchedSources() {
  return function (dispatch, getState) {
    return (0, _sourcesSliceAPI.fetchSources)().then(function (loadedNews) {
      dispatch(stateUpdate(loadedNews));
    });
  };
}