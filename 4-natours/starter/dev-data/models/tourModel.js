const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A tour must have a name'],
		unique: true,
		trim: true,
	},
	duration: {
		type: Number,
		required: [true, 'A tour must have a duration'],
		trim: true,
	},
	maxGroupSize: {
		type: Number,
		required: [true, 'A tour must have group size'],
		trim: true,
	},
	difficulty: {
		type: String,
		required: [true, 'A tour must have a difficulty'],
		trim: true,
	},
	ratingsQuantity: {
		type: Number,
	default:0
	},
	priceDiscount: Number,
	summary: {
		type: String,
		trim: true,
		required: [true, 'A tour must have a description'],
	},
	ratingsAverage: {
		type: Number,
		default: 4.5,
	},
	price: {
		type: Number,
		required: [true, 'A tour must have a price'],
	},
	imageCover: {
		type: String,
		required: [true, 'A tour must have a cover image'],
	},
	images: [String],
	createdAt: {
		type: Date,
		default: Date.now(),
    select:false
	},
	startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
