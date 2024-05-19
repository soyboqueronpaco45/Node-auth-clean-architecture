import type { Request, Response } from "express";
import { CreatedUserDto } from "../domain";
import { readableStreamToJSON } from "bun";

export class AuthController {
  constructor() {}
  registerUser = (req: Request, res: Response) => {
    const [error, createdUserDto] = CreatedUserDto.create(req.body);
    if (error) return res.status(400).json(error);
    res.status(201).json(createdUserDto);
  };
}
