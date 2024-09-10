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

module.exports = model('ShoppingList', shoppingListSchema);