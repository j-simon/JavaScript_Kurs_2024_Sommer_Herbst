const { Schema, model,SchemaTypes } = require('mongoose');

const shoppingListSchema = new Schema({
    // userId: String,
    // entries: String,
    userId: {
        type: String, // "123"
        required: true, // Pflichtfeld , benötigt
        immutable: true, // unveränderbar, kein Update auf die
        validate: {
            validator: (value) => Number.isInteger(Number(value)) && value.length === 6,
          },
      },
    //   entries: String,
    entries: [
        {
          type: SchemaTypes.ObjectId,
          ref: 'ShoppingListEntry',
        },
      ],

});

// Middleware für das Löschen des HauptDokumentes über die userId -> this._id
// es müssen auch die UnterDokumente gelöscht werden
shoppingListSchema.pre('deleteOne', { document: true, query: false }, async function (next) {
  console.log("dieses Hauptdokument wird gerade gelöscht, aus der PATCH Route ohne Unterentry", this._id)

  // jetzt zusätzlich alle UnterDokumente löschen, wo die _id matcht!
  await model('ShoppingListEntry').deleteMany({ shoppingListSchema: this._id })
  next() // zur nächsten Middleware weiterleiten
})

module.exports = model('ShoppingList', shoppingListSchema);