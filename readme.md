# network-type 
> Get the network type.


## Install

```
$ npm install --save network-type
```


## Usage

```js
const networkType = require('network-type');

networkType();
//=> { type: 'UMTS', version: '3G', downlinkMax: '2' }
```

__Type would be on of the:__

* bluetooth

* cellular

* ethernet

* none

* wifi

* wimax

* other

* unknown


## License

MIT © [Hemanth.HM](https://h3manth.com)
