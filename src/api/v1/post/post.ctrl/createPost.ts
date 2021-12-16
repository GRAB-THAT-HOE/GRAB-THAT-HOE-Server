import { Response } from "express";
import User from "../../../../entity/User";
import Post from "../../../../entity/Post";
import { getRepository } from "typeorm";
import PostRequestType from "../../../../type/PostRequestType";

export default async (req, res: Response) => {
  const post = new Post();

  const { file } = req;
  const { phone } = req.user;
  const data: PostRequestType = req.body;
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
        message: "사용자를 찾지 못했습니다.",
      });
    }
    if (user.permission === 1) {
      return res.status(403).json({
        status: 403,
        message: "게시물을 업로드할 권한이 없습니다.",
      });
    }

    post.title = data.title;
    post.mainlocation = data.mainlocation;
    post.sublocation = data.sublocation;
    post.explanation = data.explanation;
    post.salary = data.salary;
    post.additionalExplanation = data.additionalExplanation
      ? data.additionalExplanation
      : "";
    post.isDisabled = data.isDisabled;
    post.isForeign = data.isForeign;
    post.giveRoomAndBoard = data.giveRoomAndBoard;
    post.giveSnack = data.giveSnack;
    post.startDateYear = data.startDateYear;
    post.startDateMonth = data.startDateMonth;
    post.startDateDay = data.startDateDay;
    post.endDateYear = data.endDateYear;
    post.endDateMonth = data.endDateMonth;
    post.endDateDay = data.endDateDay;
    post.startTime = data.startTime;
    post.endTime = data.endTime;
    post.breakTime = data.breakTime;
    post.img = file ? file.path : "";
    post.user = user;

    await post.save();

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
