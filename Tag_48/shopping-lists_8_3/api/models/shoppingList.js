const { Schema, model,SchemaTypes } = require('mongoose');

const shoppingListSchema = new Schema({
    // userId: String,
    // entries: String,
    // 7.2 umbenannt
    shoppingListId: {
      // _id
        type: String, // "123456"
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
  for (const entry of this.entries) {
      await entry.deleteOne()
  }
  next()
})

shoppingListSchema.pre(['deleteOne', 'remove'], { document: true, query: false }, async function (next) {
  const user = await model('User').findOne({ lists: { $elemMatch: { $eq: this._id } } })
  const newLists = user.lists.filter((objectIdObj) => objectIdObj.toHexString() !== this.id)

  user.lists = newLists
  await user.save()

  next()
})
module.exports = model('ShoppingList', shoppingListSchema);