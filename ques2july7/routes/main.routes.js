const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const bookController = require("../controllers/book.controller");

// User Routes
router.post("/add-user", userController.addUser);
router.get("/user-rentals/:userId", userController.userRentals);

// Book Routes
router.post("/add-book", bookController.addBook);
router.post("/rent-book", bookController.rentBook);
router.post("/return-book", bookController.returnBook);
router.get("/book-renters/:bookId", bookController.bookRenters);
router.put("/update-book/:bookId", bookController.updateBook);
router.delete("/delete-book/:bookId", bookController.deleteBook);

module.exports = router;
