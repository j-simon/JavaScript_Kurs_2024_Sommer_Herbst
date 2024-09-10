const { Schema, model } = require('mongoose');

const shoppingListEntrySchema = new Schema({
    food: {
        type: String,
        required: true,
        lowercase: true, // Water -> water , FOod => food
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now,
    },


});

module.exports = model('ShoppingListEntry', shoppingListEntrySchema);