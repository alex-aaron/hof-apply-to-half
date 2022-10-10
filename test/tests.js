const assert = require('assert');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const app = require('../index.js');
const stdout = require("test-console").stdout;
const stderr = require("test-console").stderr;
const sinon = require('sinon');

describe("test", function(){
  it('should return test readout', function(){
    assert.equal('test', 'test');
  });
});
