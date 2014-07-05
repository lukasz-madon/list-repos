'use strict';

describe('Service: Githubrepos', function () {

  // load the service's module
  beforeEach(module('listRepoApp'));

  // instantiate service
  var Githubrepos;
  beforeEach(inject(function (_Githubrepos_) {
    Githubrepos = _Githubrepos_;
  }));

  it('should do something', function () {
    expect(!!Githubrepos).toBe(true);
  });

});
