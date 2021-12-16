import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../../../../entity/User";

export default async (req: Request, res: Response) => {
  const { phone } = req.params;
  try {
    const userRepository = getRepository(User);
    const user: User = await userRepository.findOne({
      where: {
        phone: phone,
      },
    });
    if (user) {
      return res.status(200).json({
        status: 200,
        message: "해당 전화번호를 가진 계정이 이미 존재합니다.",
        isExist: true,
      });
    }
    // 인증번호 발송 API 사용
    return res.status(200).json({
      status: 200,
      message: "인증번호가 발송되었습니다.",
      isExist: false,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 로그인에 실패했습니다.",
    });
  }
};
