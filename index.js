var sleep = require('system-sleep');

for (let i = 0; i < 1000000; i++) {
    console.log(new Date())
    sleep(1000)
}
