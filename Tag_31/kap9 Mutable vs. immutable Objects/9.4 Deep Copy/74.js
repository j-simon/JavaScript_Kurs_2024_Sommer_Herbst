function deepCopy(obj) {
    let temp;
  
    if (obj === null || typeof obj !== 'object' || 'isActiveClone' in obj) {
      return obj;
    }
    if (obj instanceof Date) {
      temp = new obj.constructor(); //or new Date(obj);
    } else {
      temp = obj.constructor();
    }
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj['isActiveClone'] = null;
        temp[key] = deepCopy(obj[key]);
        delete obj['isActiveClone'];
      }
    }
    return temp;
  }

const person = { children: [{a:1,b:2}] };
const person2 = deepCopy(person) //{ ...person };

console.log(person === person2); // false
console.log(person.children === person2.children); // true

  