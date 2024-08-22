function User(username, password) {
  this.username = username;
  this.password = password;

  this.login = function (userPassword) {
    return this.password === userPassword ? 'login successfull' : 'login failed';
  };
}

// User.prototype.login = function (userPassword) {
//   return this.password === userPassword ? 'login successfull' : 'login failed';
// };

User.prototype.changePassword = function (userPassword) {
  if (this.password === userPassword) return 'new passowrd must be different';
  this.password = userPassword;
  return 'password changed successfully';
};

const user = new User('Christine', 'TopSecret123');

console.log(user.login('TopSecret123')); // login successfull
console.log(user.changePassword('EvenMoreSecret42')); // password changed successfully