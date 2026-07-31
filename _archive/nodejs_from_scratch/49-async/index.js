let fs = require('fs')
process.nextTick(function () { console.warn('nextTick before timer') });


setTimeout(
  function () {
    fs.readFile('./data.txt', { 'encoding': 'utf-8' }, function (error, data) {
      console.log(data)
    });
    process.nextTick(function () { console.warn('nextTick after timer') })
  }, 100
);

process.nextTick(function () { console.warn('nextTick after the timer') })
