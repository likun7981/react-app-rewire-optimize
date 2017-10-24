# react-app-rewire-optimize
> Add babel-react-optimize to your create-react-app babel config with react-app-rewired

* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [react-app-rewired](https://github.com/timarney/react-app-rewired)
* [react-app-rewire-host](https://github.com/likun7981/react-app-rewire-host)
* [babel-react-optimize](https://github.com/thejameskyle/babel-react-optimize)

## Install

```bash
# use npm
$ npm install --save-dev react-app-rewire-optimize

# use yarn
$ yarn add --dev react-app-rewire-optimize
```

## Usage

In the `config-overrides.js` for [react-app-rewired](https://github.com/timarney/react-app-rewired) add code

```javascript
/* config-overrides.js */
const rewireOptimize = require('react-app-rewire-optimize');

module.exports = (config, env)=>{
  config = rewireOptimize(config, env)
  return config;
}
```  

## License
MIT
