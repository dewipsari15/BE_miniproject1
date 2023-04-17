import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/Users.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

//lokasi router
import ProductRoute from "./routes/ProductRoute.js";
import bodyParser from "body-parser";
app.use("/api/product", ProductRoute);
// import invest from "./routes/Invest.js";
// app.use("/api/invest", invest);
// import wallet from "./routes/Wallet.js";
// app.use("/api/wallet", wallet);
// import user from "./routes/Users.js";
// app.use("/api/user", user);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
