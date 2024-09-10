
function timeConsumingFunction(name, duration) {
    return new Promise((resolve) => {
      // Use setTimeout to simulate asynchronous behavior
      setTimeout(() => {
        console.log(`${name} completed in ${duration}ms`);
        resolve(name);
      }, duration);
    });
  }
  
  // Running the functions in parallel, handling each result as it finishes
  function executeInParallel() {
    console.log('Starting all tasks...');
  
    // Start all the tasks concurrently
    timeConsumingFunction('Task 1', 3000).then(result => console.log(`Result: ${result}`));
    timeConsumingFunction('Task 2', 2000).then(result => console.log(`Result: ${result}`));
    timeConsumingFunction('Task 3', 1000).then(result => console.log(`Result: ${result}`));
  
    console.log('Tasks running in parallel...');
  }
  
  executeInParallel();
  