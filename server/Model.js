const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/colab-docs");

const db = mongoose.connection;

// Handle MongoDB connection error
db.on('error', (error) => console.error('MongoDB connection error:', error));
// Once MongoDB is connected
db.once('open', () => console.log('Connected to MongoDB'));

const Model = mongoose.model("documents", new mongoose.Schema({ _id: String, data: String }));

module.exports =  Model;