

const checksumDigit = (isbn) => {
    isbn = isbn.replace(/-/g, "") // string
    // console.log(isbn)

    let ziffern = isbn
        .split("")
        .map(buchstabe => buchstabe * 1)
        .reduce((vorherigeSumme, ziffer, index) => 
            vorherigeSumme + ziffer * (index % 2 === 0 ? 1 : 3), 0);

//    console.log('ziffern --->',  ziffern);
    // console.log('ziffern --->', typeof ziffern);
   
    // Vom Ergebnis dieser Berechnung 
    // verwende nur die letzte Ziffer 
    // und subtrahiere sie von 10
    // 46  = > 6 letzte ziffer
    let prüfziffer = (ziffern + "") // number to string
    // console.log('prüfziffer --->', prüfziffer);
    
    prüfziffer  = prüfziffer.charAt(prüfziffer.length -1)
    // console.log('prüfziffer --->', prüfziffer);
    prüfziffer= Number(prüfziffer)
    if (prüfziffer === 10)
        prüfziffer = 0

    // console.log('prüfziffer , als letzte Ziffer --->', prüfziffer);
    return 10 - prüfziffer
}

console.log(checksumDigit('4567')); // -> 4

console.log(checksumDigit('978151705411')); // -> 3

console.log(checksumDigit('978-3-86680-192-')); // -> 9 
