const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.getSaved)
  .post(booksController.saveBook);

// Matches with "/api/books/:id"
router.route("/:id")
  .delete(booksController.removeSaved);

module.exports = router;