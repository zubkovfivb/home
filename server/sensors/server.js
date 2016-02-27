import bedroom from './rooms/bedroom'

var rooms = {
  bedroom: {
    name: 'Bed room',
    port: 'ttyUSB0'
  }
};

module.exports = {
  start: function() {
    console.log('Sensor server started');

    bedroom.start(rooms.bedroom);
  }
};
