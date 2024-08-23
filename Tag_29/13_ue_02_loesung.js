
let username = 'Christine'
let password = 'TopSecret123'


const login = (userPassword) => {
  return password === userPassword ? 'login successfull' : 'login failed';
}

const changePassword = (userPassword)  => {
  if (password === userPassword) return 'new passowrd must be different';
  password = userPassword;
  return 'password changed successfully';
}

console.log(login('TopS23')); // login failed
console.log(changePassword('EvenMoreSecret42')); // password changed succe
console.log(login('EvenMoreSecret42')); // login successfull