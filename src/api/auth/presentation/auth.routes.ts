import { Router } from "express";
import { AuthController } from "./auth.controller";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new AuthController();
    router.post("/register", controller.registerUser);
    return router;
  }
}
