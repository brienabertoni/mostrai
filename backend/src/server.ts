import express from "express";
import cors from "cors";
import indicatorsRouter from "./routes/indicators";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Cidadão Data API",
  });
});

app.use("/api/indicators", indicatorsRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});