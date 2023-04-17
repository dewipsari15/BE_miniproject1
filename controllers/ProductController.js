import multer from "multer";
import Product from "../models/ProductModel.js";

// Middleware untuk meng-handle upload file
const upload = multer({
  dest: "uploads/", // direktori untuk menyimpan file sementara
});

export const getProducts = async (req, res) => {
  connection.query("SELECT * FROM items", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
  //   try {
  //     const response = await Product.findAll();
  //     res.json(response);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveProduct = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image_url = req.file ? req.file.filename : null;

    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO items (name, description, image_url) VALUES ($1, $2, $3) RETURNING id",
      [name, description, image_url]
    );
    const newId = result.rows[0].id;
    res.json({ id: newId });
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
};

export const updateProduct = function (req, res) {
  const id = req.params.id;
  const name = req.body.name;
  const price = req.body.price;

  connection.query(
    "UPDATE items SET name = ?, price = ? WHERE id = ?",
    [name, price, id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

export const deleteProduct = function (req, res) {
  const id = req.params.id;

  connection.query(
    "DELETE FROM items WHERE id = ?",
    [id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};
