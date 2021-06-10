"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadArticlesBySelectedSource = loadArticlesBySelectedSource;

var _constants = require("./constants");

var _singleSourceSliceAPI = require("../../../api/singleSourceSliceAPI");

var stateUpdate = function stateUpdate(newState) {
  return {
    type: _constants.FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES,
    payload: newState
  };
}; //action loader


function loadArticlesBySelectedSource(endpointOrID) {
  return function _callee(dispatch, getState) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _singleSourceSliceAPI.fetchArticlesBySelectedSource)(endpointOrID).then(function (loadedNews) {
              dispatch(stateUpdate(loadedNews));
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };
} // const  clickState = () => {
//     debugger;
//     return {
//         type: "CLICKED",
//         payload: true   
//      }
// }
// export function click() {
//     debugger;
//     return (dispatch) => {
//         debugger;
//         return new Promise((resolve) =>{
//             resolve(dispatch(clickState))
//         })  
//     }
// }