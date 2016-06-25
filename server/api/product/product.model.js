'use strict';

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

var ProductSchema = new mongoose.Schema({
  category: String,
  title: String,
  link: String,
  subTitle: String,
  img: String,
  price: Number,
  store: String
});

ProductSchema.plugin(mongoosePaginate);

export default mongoose.model('Product', ProductSchema);
