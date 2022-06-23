import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ticketSchema = new Schema({
  seat: String,
  price: {type: Number, min: 0,},
  
}, {
  timestamps: true
})
const flightsSchema = new Schema({
  airline: String,
  flightNo: Number,
  airport: String,
  departs: { type: Date, required: true,
    default: function() {
      let currentDate = new Date()
      let addedYear = currentDate.getFullYear() + 1
      return currentDate.setFullYear(addedYear)
    },
  },

  ticket: [ticketSchema],
  meal: [{type: Schema.Types.ObjectId, ref: 'Meal'}],
}, {
  timestamps:true,
})
  const Flight = mongoose.model('Flight', flightsSchema)

  export {
    Flight,
  }
