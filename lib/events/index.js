'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('./2016');

var _2 = _interopRequireDefault(_);

var _3 = require('./2017');

var _4 = _interopRequireDefault(_3);

var _5 = require('./2018');

var _6 = _interopRequireDefault(_5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = [].concat(_2.default, _4.default, _6.default);

events.forEach(function (event) {
  event.range = [new Date(event.range[0] + ' 00:00:00').getTime(), new Date((event.range[1] || event.range[0]) + ' 23:59:59').getTime()];
});

exports.default = events;
module.exports = exports['default'];