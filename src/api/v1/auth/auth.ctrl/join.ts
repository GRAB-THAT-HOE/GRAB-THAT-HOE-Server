import "dotenv/config";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  const { name, birthYear, birthMonth, birthDay, phone, username, password } =
    req.body;
};
