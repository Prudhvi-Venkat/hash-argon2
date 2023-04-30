const argon2 = require('argon2');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a value: ', (inputValue) => {
  hashPWD(inputValue);
  rl.close();
});

const hashPWD = async ({ inputValue }) => {
  try {
    const hash = await argon2.hash("inputValue",
      {
        hashLength: 60,
        memoryCost: 65536,
        timeCost: 3
      }
    );
    console.log("Typeof hash", typeof hash , " & " +  "Hash Length : ", hash.length)
    console.log("original Hashed pwd : ", hash.split('$'))
    console.log("Hashed password with spl characters :", hash.substring(hash.lastIndexOf('$') + 1), "Length : " , hash.substring(hash.lastIndexOf('$') + 1).length)
    console.log("Hashed password without spl characters :", hash.substring(hash.lastIndexOf('$') + 1).replace(/[^a-zA-Z0-9]/g, '') , "Length : ", hash.substring(hash.lastIndexOf('$') + 1).replace(/[^a-zA-Z0-9]/g, '').length)
  } catch (err) {
    console.log(err)
  }
}


