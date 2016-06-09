'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  category: String,
  title: String,
  link: String,
  subTitle: String,
  img: String,
  price: String,
  store: String
});

export default mongoose.model('Product', ProductSchema);
