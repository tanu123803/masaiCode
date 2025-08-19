const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dishes: [{
    dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true },
    qty: { type: Number, default: 1 }
  }],
  total: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['Order Received', 'Preparing', 'Out for Delivery', 'Delivered'],
    default: 'Order Received'
  },
  chef: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // assigned chef
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

orderSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Order', orderSchema);
