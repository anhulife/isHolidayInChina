'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isHoliday = function isHoliday(date) {
  var time = date.getTime();
  var event = _events2.default.find(function (_ref) {
    var range = _ref.range;
    return time >= range[0] && time <= range[1];
  });

  if (event) {
    return event.holiday;
  }

  var day = date.getDay();

  return day === 6 || day === 7;
};

exports.default = isHoliday;
module.exports = exports['default'];