import booksModel from "../models/bookModel.js";

// add BOOK  success
export const createBooks = async (req, res) => {
  const id = req.params.id;
  console.log(req.body);

  let data = {
    id: id,
    id: req.body.id,
    title: req.body.title,
    coverImage: req.body.coverImage,
    author: req.body.author,
    deskripsi: req.body.deskripsi,
    stok: req.body.stok,
    price: req.body.price,
  };

  const book = await booksModel.create(data);
  res.status(200).send(book);
};

// get all BOOK success
export const getAllBooks = async (req, res) => {
  const book = await booksModel.findAll();
  res.status(200).send(book);
};

// get by id BOOK
export const getBooksById = async (req, res) => {
  let id = req.params.id;
  let book = await booksModel.findByPk(id);
  res.status(200).send(book);
};

// update BOOK
export const updateBooks = async (req, res) => {
  let id = req.params.id;

  const buku = await booksModel.update(req.body, { where: { id: id } });
  if (buku.affectedRows === 1) {
    return res.json({ success: true });
  }

  res.status(200).send(buku);
};

// delete BOOK
export const deleteBooks = async (req, res) => {
  let id = req.params.id;

  await booksModel.destroy({ where: { id: id } });

  res.status(200).send("BOOK is deleted !");
};
