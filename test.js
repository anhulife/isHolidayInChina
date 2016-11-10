'use strict';
var assert = require('assert');
var isHoliday = require('./lib');

it('正常假日', function () {
  assert.equal(isHoliday(new Date('2016-11-12')), true);
});

it('正常工作日', function () {
  assert.equal(isHoliday(new Date('2016-11-10')), false);
});

it('节日', function () {
  assert.equal(isHoliday(new Date('2016-10-01')), true);
});

it('节日后的补班', function () {
  assert.equal(isHoliday(new Date('2016-10-08')), false);
});
