// Ergänze die folgende Funktion:

const showTodoList = (startChar, todos = ['get some milk']) =>
    console.log(todos.map(t => `${startChar} ${t}`).join('\n'))

//Beispielaufruf
showTodoList('*', ['hole butter', 'wasche Fahrrad'])

//Ausgabe
// * get some milk