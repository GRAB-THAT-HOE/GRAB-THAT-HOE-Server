import "dotenv/config";
import User from "../../../../models/User";
import { Request, Response } from "express";
import UserJoinType from "../../../../type/UserJoinType";

export default async (req: Request, res: Response) => {
  const data: UserJoinType = req.body;
  try {
    if (data.permission !== 0 && data.permission !== 1) {
      return res.status(400).json({
        status: 400,
        message: "permission 값이 옳지 않습니다.",
      });
    }
    if (data.introduction.length > 100) {
      return res.status(400).json({
        status: 400,
        message: "소개글의 길이가 한도를 초과했습니다.",
      });
    }
    await User.create({
      name: data.name,
      phone: data.phone,
      introduction: data.introduction,
      permission: data.permission,
      location: data.location,
    });
    return res.status(200).json({
      status: 200,
      message: "회원가입에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 회원가입에 실패했습니다.",
    });
  }
};
