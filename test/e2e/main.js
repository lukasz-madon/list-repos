'use strict';


describe('my app', function() {

  browser.get('/#');

  it('should automatically redirect to /# when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/#");
  });

  describe('main view', function() {

    beforeEach(function() {
      browser.get('/#');
    });

    it('should render default user', function() {
      expect(element.all(by.css('.user-login')).first().getText()).toMatch(/lukasz-madon/);
    });

    it('should display only 20 repositories', function() {
      expect(element.all(by.css('.repo')).count()).toBeLessThan(21);
    });

  });
  // bug :( https://github.com/angular/protractor/issues/66
  // describe('detailed repository view', function() {

  //   beforeEach(function() {
  //     browser.get('#/repo-details/heroesgenerator');
  //   });

  //   it('should render repository title', function() {
  //     console.log(element('body').getText());
  //     expect(element('body').getText()).toContain('heroesgenerator');
  //   });
  // });
});
