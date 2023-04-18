import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Book = db.define(
  "books",
  {
    title: {
      type: DataTypes.STRING,
    },
    coverImage: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    deskripsi: {
      type: DataTypes.STRING,
    },
    stok: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Book;
