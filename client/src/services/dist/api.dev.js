"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPosts = exports.savePost = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = 'http://localhost:8080';

var savePost = function savePost(payload) {
  return regeneratorRuntime.async(function savePost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(API_URL, "/post"), payload));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log('Error: ', _context.t0.message);
          return _context.abrupt("return", _context.t0.response.data);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.savePost = savePost;

var getAllPosts = function getAllPosts() {
  return regeneratorRuntime.async(function getAllPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(API_URL, "/posts")));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.log('Error: ', _context2.t0.message);
          return _context2.abrupt("return", _context2.t0.response.data);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.getAllPosts = getAllPosts;