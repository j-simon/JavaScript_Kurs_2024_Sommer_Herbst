const bcrypt = require('bcrypt');


let pwHash;

const verschluesseln = async () => {
    const password = '_geheim_!1A'; // "123"
    // $2b$10$z395X/SDfzDAtNUNlV3zT.JDmovvR0xQLlGB1EYp0uRe2vgf2di0.
    // $2b$10$BbEFT5J2whOoJVO5s9IvIOv2RI9YKSZEyd8yW7bm2uo1Y2RYiRCqC

    const hash = await superHash(password);
    console.log(hash); // Correctly logs the full bcrypt hash
}

const superHash = async (pwd) => {
    pwHash = await bcrypt.hash(pwd, 10); // Salt rounds
    return pwHash;
}



const test = async () => {
    const password = '_geheim_!1A';
    // Ensure that pwHash is defined before calling bcrypt.compare
    if (!pwHash) {
        console.log("Hash not generated yet!");
        return false;
    }

    const isMatch = await bcrypt.compare(password, pwHash);
    console.log("Password match: ", isMatch);
    return isMatch;
}

const init = async () => {
    await verschluesseln(); // Wait for the hashing to complete
    await test();           // Now compare the password
}

init();
