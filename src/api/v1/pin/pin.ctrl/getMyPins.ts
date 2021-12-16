import { Response } from "express";
import User from "../../../../entity/User";
import Pin from "../../../../entity/Pin";
import { getRepository } from "typeorm";

export default async (req, res: Response) => {
  const { phone } = req.user;
  try {
    const userRepository = getRepository(User);
    const user: User = await userRepository.findOne({
      where: {
        phone: phone,
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "사용자를 찾을 수 없습니다.",
      });
    }
    if (user.permission === 0) {
      return res.status(403).json({
        status: 403,
        message: "말뚝을 조회할 권한이 없습니다.",
      });
    }

    const pinRepository = getRepository(Pin);
    const pins = pinRepository.find({
      where: {
        userPhone: phone,
      },
    });
    return res.status(200).json({
      status: 200,
      message: "자신의 말뚝 조회에 성공했습니다.",
      pins,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 자신의 말뚝 조회에 실패했습니다.",
    });
  }
};
