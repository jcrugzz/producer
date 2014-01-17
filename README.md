# producer

[![build status](https://secure.travis-ci.org/jcrugzz/producer.png)](http://travis-ci.org/jcrugzz/producer)
Readable stream that emits [`godot`][godot] object events at a particular TTL.

## Example

```js
var Producer = require('producer');

var producer = new Produdcer();
//
// Will emit a standard `godot` object every 15 seconds (default values)
//
producer.on('data', function (data) {
  console.dir(data);
});

```

[godot]: https://github.com/nodejitsu/godot
