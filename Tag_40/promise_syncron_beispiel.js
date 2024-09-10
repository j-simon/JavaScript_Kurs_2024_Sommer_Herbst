// Simulating a time-consuming operation using a promise and a busy-wait loop
function timeConsumingFunction(name, duration) {
    return new Promise((resolve) => {
      // Busy-wait loop to simulate a time-consuming task
      const endTime = Date.now() + duration;
      while (Date.now() < endTime) {
        // Simulating work (busy-waiting)
      }
      console.log(`${name} completed in ${duration}ms`);
      resolve(name);
    });
  }
  
  // Running the functions in parallel using Promises
  function executeInParallel() {
    console.log('Starting all tasks...');
  
    // No async/await, using Promise.all directly
    Promise.all([
      timeConsumingFunction('Task 1', 3000),
      timeConsumingFunction('Task 2', 2000),
      timeConsumingFunction('Task 3', 1000),
    ])
      .then((results) => {
        console.log('All tasks completed:', results);
      })
      .catch((err) => {
        console.error('Error occurred:', err);
      });
  }
  
  executeInParallel();
