import express from "express";
import { createBooks, deleteBooks, getAllBooks, getBooksById, updateBooks } from "../controllers/books.js";

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBooksById);
router.post('/', createBooks);
router.patch('/:id', updateBooks);
router.delete('/:id', deleteBooks);

export default router;