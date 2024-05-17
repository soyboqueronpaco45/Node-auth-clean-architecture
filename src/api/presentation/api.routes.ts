import { Router } from "express";
import { AuthRoutes } from "../auth/presentation/auth.routes";

export class ApiRoutes {
  static get routes(): Router {
    const router = Router();
    router.get("/", (_req, res) => {
      res.status(200).json({ massage: "Api rest pagina" });
    });
    router.use("/auth", AuthRoutes.routes);
    return router;
  }
}
