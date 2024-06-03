const Document = require("../models/documentModel");

const getDocuments = (req, res) => {
    const { id } = req.query;
    const doc = Document.findById({ id });

    if(!doc){
        res.status(404).json({message: "Document not found"});
    }
    res.status(200).json(doc);
};

// const createDocument = () => {

// };

// const updateDocument = () => {

// };

// module.exports = { createDocument, getDocuments, updateDocument };
module.exports = { getDocuments };