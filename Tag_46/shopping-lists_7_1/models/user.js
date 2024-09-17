const { Schema, model } = require('mongoose');
const userSchema = new Schema({
  username: {
    index: { unique: true },
    type: String,
    required: true,
    immutable: true,
  },
  password: {
    type: String,
    required: true,
  },
  listen:{
    type: SchemaTypes.ObjectId,
          ref: 'ShoppingList',
}});

module.exports = model('User', userSchema);