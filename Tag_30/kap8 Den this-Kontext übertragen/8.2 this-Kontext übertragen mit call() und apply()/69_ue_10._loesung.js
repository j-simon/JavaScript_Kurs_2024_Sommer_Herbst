const data = {
  list: ['Cheese', 'Milk', 'Butter', 'Bread'],
};

function printList() {
  console.log(this.list.join(', '));
}

printList.call(data); // Cheese, Milk, Butter, Bread

// or

printList.apply(data); // Cheese, Milk, Butter, Bread