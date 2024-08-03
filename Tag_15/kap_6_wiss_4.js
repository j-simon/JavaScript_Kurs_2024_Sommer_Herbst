// Ergänze die folgende Funktion:
const showTodoList = (todos, startChars = '->') => console.log(todos.map(t => `${startChars} ${t}` ).join('\n'))

//Beispielaufruf
showTodoList(['find batteries', 'save World', 'get out of House'], '===>')


// Ausgabe

// -> find batteries

// -> save World

// -> get out of House

