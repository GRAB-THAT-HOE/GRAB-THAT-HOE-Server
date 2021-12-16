import { Request, Response } from "express";
import { getRepository } from "typeorm";

export default async (req, res: Response) => {
  const { confirmationcode } = req.body;
  try {
    // 인증번호 확인 로직
    if (Number(confirmationcode) !== 1234) {
      return res.status(400).json({
        status: 400,
        message: "인증번호가 옳지 않습니다.",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "인증되었습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 로그인에 실패했습니다.",
    });
  }
};
