const express = require('express');
const router = express.Router();
const bookController=require("../controller/bookController");


router.get("/books",bookController.BookGet);
router.get("/books/:id",bookController.Find);
router.post("/books",bookController.BookPost);
router.put("/books/:id",bookController.getBook,bookController.BookUpdate);
router.delete("/books/:id",bookController.getBook,bookController.BookDelete);


module.exports = router;
