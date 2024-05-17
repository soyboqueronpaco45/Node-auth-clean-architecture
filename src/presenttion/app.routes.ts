import { Router } from "express";
import { ApiRoutes } from "../api/presentation/api.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.get("/", (_req, res) => {
      res.status(200).json({ massage: "Bienvenido a mi api" });
    });
    router.use("/api/v1", ApiRoutes.routes);
    return router;
  }
}
