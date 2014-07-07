### GitHub repository explorer

1. A main page which shows a list of up to 20 repositories sorted by the number of stars/watchers (highest first)
1. Each item displays the repo title, the number of stars/watchers and the number of forks
1. Clicking on the title shows a more detailed description of the repository containing the description, homepage URL and any other relevant information.

## Tech

This is frontend app build with AngularJS, Bootstrap, SASS, Bower, Grunt and Karma.


## Getting started

To install all dependencies run `npm install` and `bower install`

Command `grunt serve` starts local server and `grunt test` runs unit tests. 

To start e2e tests first start Selenium `node_modules/protractor/bin/webdriver-manager start`, http server (grunt serve is good enough to run it locally) and then run `grunt protractor`.
