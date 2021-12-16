import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../../../../entity/User";
import { getRepository } from "typeorm";

export default async (req: Request, res: Response) => {
  const { phone } = req.body;
  try {
    const userRepository = await getRepository(User);
    const user: User = await userRepository.findOne({
      where: {
        phone: phone,
      },
    });
    const token = jwt.sign(
      {
        phone: user.phone,
      },
      process.env.JWT_SECRET,
      {
        issuer: "grabthathoe",
      }
    );
    return res.status(200).json({
      status: 200,
      message: "로그인에 성공했습니다.",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 로그인에 실패했습니다.",
    });
  }
};
