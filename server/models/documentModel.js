const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true
 },
  content: { 
    type: String, 
    default: ''
 },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
 }
},{
    timestamps: true
});

const Document = mongoose.model('Document', DocumentSchema);

module.exports = Document;