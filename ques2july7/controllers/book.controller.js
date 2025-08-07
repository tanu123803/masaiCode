const Book = require("../models/Book.model");
const User = require("../models/User.model");

exports.addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book added", book });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.rentBook = async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);

    if (!user || !book) throw new Error("User or Book not found");

    if (!user.rentedBooks.includes(bookId)) {
      user.rentedBooks.push(bookId);
      await user.save();
    }

    if (!book.rentedBy.includes(userId)) {
      book.rentedBy.push(userId);
      await book.save();
    }

    res.json({ message: "Book rented successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.returnBook = async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    await User.findByIdAndUpdate(userId, { $pull: { rentedBooks: bookId } });
    await Book.findByIdAndUpdate(bookId, { $pull: { rentedBy: userId } });

    res.json({ message: "Book returned successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.bookRenters = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findById(bookId).populate("rentedBy");
    res.json(book);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    await User.updateMany({ rentedBooks: bookId }, { $pull: { rentedBooks: bookId } });

    res.json({ message: "Book deleted", deletedBook });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
