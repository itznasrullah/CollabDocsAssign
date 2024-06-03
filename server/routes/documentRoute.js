const express = require('express');
const auth = require('../middlewares/authMiddleware.js');
const { createDocument, getDocuments, updateDocument } = require('../controllers/documentController.js');

const router = express.Router();

router
.route('/:id')
// .post(auth, createDocument)
.get(auth, getDocuments);

// router.put('/:id', auth, updateDocument);

module.exports = router;