# Odototo in React

```
$ npm install
$ npm install -g babel-cli
```

```
"clean": "rm -rf build public/bundle.js"
"build": "babel server --out-dir build && ./node_modules/.bin/webpack"
"start": "set NODE_ENV=production&&node ./build/main.js"
"development": "set NODE_ENV=development&&node ./build/main.js"
```

#### References
- [Tutorial](https://velopert.com/1492)
- [Redux express repo](https://github.com/woosungchu/redux-express)
- [lastest version in ember](https://github.com/woosungchu/odototo)
- [Before you deploy app to Elastic Beanstalk](http://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/eb-cli3-getting-started.html)
