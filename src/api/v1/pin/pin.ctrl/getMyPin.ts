import { Response } from "express";
import User from "../../../../models/User";
import TokenRequestType from "../../../../type/TokenRequestType";

export default async (req: TokenRequestType, res: Response) => {
  const _id: string = req.user._id;
  try {
    const user = await User.findById(_id).populate("pins");
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "사용자를 찾을 수 없습니다.",
      });
    }
    const pins = user.pins;
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
