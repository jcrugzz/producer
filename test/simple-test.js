var Producer = require('../');
var test = require('tape');

test('test that we emit events at a particular TTL', function (t) {
  t.plan(1);
  var producer = new Producer({ ttl: 5000 });

  producer.on('data', function (data) {
    t.ok(data, 'Received data');
    producer.destroy();
    t.end();
  });
})
