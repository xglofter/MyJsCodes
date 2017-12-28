var config = require('./hello-config.json')

module.exports = function() {
  var hello = document.createElement('div');
  // hello.textContent = "Hello World!";
  hello.textContent = config.text;
  return hello;
}
