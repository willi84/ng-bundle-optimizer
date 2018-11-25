# ng-bundle-optimizer
Reducing bundle size with the help of (unit) tests

[Demo (minified)](https://willi84.github.io/ng-bundle-optimizer/demo/prod)
[Demo (raw for dev)](https://willi84.github.io/ng-bundle-optimizer/demo/dev)

# current metrics
of main bundle (called new-foo.min.js)

| Date        | unzipped size   | reduced to  | percentage of | gzip    |
| ----------- | --------------- | ----------- | ------------- | ------- |
| 24.11.2018  | 312 KB          | 248 KB      | 0.795%        | 44.7 kb |



# requirements
## global

* node 9.11.1
* typescript 2.8.3
* @angular/cli: 6.0.1
* tslint 5.10.0



# used projects
* https://github.com/RisingStack/node-typescript-starter
* https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/
* https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2

# data

* v1: angular5, foo.js is demo data, manually unminified, problem: testBed misconfigured the data
