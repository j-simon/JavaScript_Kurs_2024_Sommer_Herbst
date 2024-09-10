function loadData(dummyData) {
    return dummyData;
  }
  
  function validateData(data) {
    console.log("data",data)
    console.log('data[vorname] --->', data['vorname']);
    if (data['vorname'] == undefined) {

        return false;
    }
    return true;

    // if (data == false) {
    //   return false;
    // }
    // return true;
  }
  

  // beide async function bauen intern ein Promise auf mit resolve() und reject()
  async function load(dummyData) {
    const data = loadData(dummyData);
    if (data === undefined) {
      throw new Error('Data is undefined'); // das ist das reject()
    }
    return data; // das ist das resolve()
  }
  
  async function validatedData(data) {
    const validData = validateData(data);
    if (!validData) {
      throw new Error('Data is not valid');
    }
    return data;
  }
  
  async function getValidatedData(dummyData) {
    let data;
    try {
      data = await load(dummyData); // als async function
    } catch (error) {
      console.log(error.message);
      return;
    }

    try {
      data = await validatedData(data); //als async function
    } catch (error) {
      console.log(error.message);
      return;
    }

    console.log(data);
  }
  
  
// 1. aufrufen mit Testdaten
// getValidatedData({vorname:"Jens"});
// getValidatedData(); // 1. Negativer Aufruf: Daten undefined 'No data found'
getValidatedData({}); // 2. Negativer Aufruf: Daten ok, aber dann Validierung läuft schief, es muss einen key vorname geben