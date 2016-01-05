var expect = require('chai').expect;
var droptake = require('./');

describe('droptake', function() {
  it('should take values starting from n', function() {
    var output = droptake([1, 2, 3, 4, 5], 3, 2);
    expect(output).to.eql([3, 4, 5]);
  });

  it('should take values starting from 0 if n is undefined', function() {
    var output = droptake([1, 2, 3, 4, 5], 3);
    expect(output).to.eql([1, 2, 3]);
  });
});