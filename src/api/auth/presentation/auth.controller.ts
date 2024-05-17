import type { Request, Response } from "express";

export class AuthController {
  constructor() {}
  registerUser = (_req: Request, res: Response) => {
    res.status(201).json({
      massage: "Registro de Usuario",
    });
  };
}
