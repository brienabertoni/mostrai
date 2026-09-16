import { Router } from "express";
import { indicators } from "../data/indicators";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    city: "Campinas",
    state: "SP",
    indicators,
  });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const indicator = indicators.find((item) => item.id === id);

  if (!indicator) {
    return res.status(404).json({
      message: "Indicador não encontrado.",
    });
  }

  res.json(indicator);
});

export default router;