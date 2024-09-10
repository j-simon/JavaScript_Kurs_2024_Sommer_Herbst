// Vorsicht, vorher checken, welche database ausgewählt ist!
// wenn es die falsche ist, mit use [db] in die richtige wechseln
db.randomNotes.insertMany([
    { content: 'Cheese got 10% more expensive' },
    { content: 'call Dave at 9PM' },
    { content: 'honey melons are not produced by bees' },
])

// ein 2. Befehl ohne ; als Befehlsabschluss möglich
db.randomNotes.insertMany([
    { content: 'aa expensive' },
    { content: 'bbt 9PM' },
    { content: 'ccc melons are not produced by bees' },
])