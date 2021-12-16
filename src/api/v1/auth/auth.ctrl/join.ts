import "dotenv/config";
import User from "../../../../entity/User";
import { Response } from "express";
import UserJoinType from "../../../../type/UserJoinType";

export default async (req, res: Response) => {
  const user = new User();

  const data: UserJoinType = req.body;
  const { file } = req;
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

    user.phone = data.phone;
    user.name = data.name;
    user.introduction = data.introduction ? data.introduction : "";
    user.permission = data.permission;
    user.mainlocation = data.mainlocation;
    user.sublocation = data.sublocation;
    user.avatar = file ? file.path : "";

    await user.save();

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
