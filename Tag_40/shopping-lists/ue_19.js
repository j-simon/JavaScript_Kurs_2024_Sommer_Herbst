function loadData(dummyData) {
    return dummyData;
  }
  
  function validateData(data) {
    if (data == false) {
      return false;
    }
    return true;
  }
  
  function getValidatedData(dummyData) {
    const loadDataPromise = new Promise((resolve, reject) => {
      const data = loadData(dummyData);
      if (data !== undefined) {
        resolve(data);
      }
      reject('No data found');
    });
  
    loadDataPromise
      .then((data) => {
        return new Promise((resolve, reject) => {
          const validData = validateData(data);
          if (validData) {
            resolve(data);
          }
          reject('Invalid data found');
        });
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  getValidatedData({});