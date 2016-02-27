import five from 'johnny-five'

var board;


module.exports = {
  start: function(settings) {
    board = new five.Board({
      port: settings.port
    });

    var sensor = new five.Thermometer({
      pin: 2,
      freq: 2000
    });

    sensor.on('data', function() {
      console.log(settings.name);
      console.log(arguments);
    });

    console.log('Bed room started');
  }
};

// ttyUSB0

//var five = require('johnny-five');
//var board = new five.Board();
//var led;
//var state = false;
//
//board.on('ready', function() {
//  console.log('ready');
//  led = new five.Led(13);
//
//  led.on();
//});
//
//console.log('Waiting');