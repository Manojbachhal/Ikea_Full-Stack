const moongoose = require("mongoose");
const CartSchema = moongoose.Schema({
  email: { type: String, required: true },
  typeName: { type: String, required: true },
  ProductId: { type: Number, required: true },
  itemNoGlobal: { type: Number, required: true },
  contextualImageUrl: { type: String, required: true },
  salesPrice_numeral: { type: Number, required: true },
  salesPrice_prefix: { type: String, required: true },
  salesPrice_wholeNumber: { type: String, required: true },
  quantity: { type: Number, require: true },
});
const Cart = moongoose.model("Cart", CartSchema);
module.exports = Cart;
