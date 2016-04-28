# DoIt or Die
Launch a task, set a timeout and if it not finish, kill it!

Example of use:

```
var DoIt = require('doit');

new DoIt(function (done) {
    // Task to do...
    heavyProcess.run(function () {
      // it is finished!!
      done();
    });
  })
  .in(50000) // The time to wait in milliseconds
  .orDie(function () {
    // This is launched after 50sec if the done is not called before
    heavyProcess.kill();
  });

````
