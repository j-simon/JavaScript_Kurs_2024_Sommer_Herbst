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
}

function getValidatedData(dummyData) {
    // 2. ein Promise-Objekt mit resove() und reject() muss erzeugt werdem!
    const loadDataPromise = new Promise((resolve, reject) => {
        const data = loadData(dummyData);
        if (data !== undefined) {
            resolve(data);
        }
        reject('No data found');
    })

    // 3. das Objekt muss die Daten die resolve() schickt mit then() abrufen, wenn sie irgendwann
    // da sind, sollte reject() aufgerufen worden sein, wird catch() aufgerufen, um den Fehler zu sehen
    loadDataPromise
    .then((data) => {
        // 4. eine weiterers Promise zur Validierung kann reolven oder rejecten
        return new Promise((resolve, reject) => {
            const validData = validateData(data);
            if (validData) {
                console.log("1. load promise - positive Antwort per resolve()" ,data);
                resolve(data);
            }
            reject('Invalid data found');
        });
    
     })
    .then((data) => { // 2. Promise des Validators
      console.log("2. validierung promise - positive Antwort per resolve()",data);
    })
    .catch((error) => {
      console.log("Negative Antwort per reject() entweder des 1. Promise 'No data found', oder des 2.Promise 'Invalid data found'",error);
    });

}
// 1. aufrufen mit Testdaten
// getValidatedData({vorname:"Jens"}); // alles OK
// getValidatedData(); // 1. Negativer Aufruf: Daten undefined 'No data found'
getValidatedData({}); // 2. Negativer Aufruf: Daten ok, aber dann, Validierung läuft schief, es muss einen key vorname geben