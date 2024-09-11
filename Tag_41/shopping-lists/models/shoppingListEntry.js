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

shoppingListEntrySchema.pre('deleteOne', { document: true, query: false }, async function (next) {
    const list = await model('ShoppingList').findOne({ entries: { $elemMatch: { $eq: this._id } } });
    const newEntries = list.entries.filter((objectIdObj) => objectIdObj.toHexString() !== this.id);
  
    if (newEntries.length <= 0) {
      await list.deleteOne({_id:this._id});
      next();
      return;
    }
  
    list.entries = newEntries;
    await list.save();
  
    next();
  });

module.exports = model('ShoppingListEntry', shoppingListEntrySchema);