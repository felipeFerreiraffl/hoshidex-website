import express from "express";
import { PORT } from "./constants/constants.js";

const app = express();

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
