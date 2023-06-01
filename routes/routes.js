const express = require('express');
const router = express.Router();
const bookController=require("../controller/bookController");


router.get("/get-books",bookController.BookGet);
router.post("/post-books",bookController.BookPost);
router.put("/put-books/:id",bookController.getBook,bookController.BookUpdate);
router.delete("/delete-books/:id",bookController.getBook,bookController.BookDelete);


module.exports = router;
