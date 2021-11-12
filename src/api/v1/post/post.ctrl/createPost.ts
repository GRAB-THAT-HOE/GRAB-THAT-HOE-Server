import { Response } from "express";
import PostRequestType from "../../../../type/PostRequestType";
import User from "../../../../models/User";
import Post from "../../../../models/Post";
import TokenRequestType from "../../../../type/TokenRequestType";

export default async (req: TokenRequestType, res: Response) => {
  const _id: string = req.user._id;
  const data: PostRequestType = req.body;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "사용자를 찾지 못했습니다.",
      });
    }
    await Post.create({
      owner: user._id,
      title: data.title,
      location: data.location,
      explanation: data.explanation,
      salary: data.salary,
      additionalExplanation: data.additionalExplanation,
      isDisabled: data.isDisabled,
      isForeign: data.isForeign,
      giveRoomAndBoard: data.giveRoomAndBoard,
      giveSnack: data.giveSnack,
      startDate: data.startDate,
      endDate: data.endDate,
      startTime: data.startTime,
      endTime: data.endTime,
      breakTime: data.breakTime,
      people: data.people,
    });
    return res.status(200).json({
      status: 200,
      message: "포스팅에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 포스팅에 실패했습니다.",
    });
  }
};
