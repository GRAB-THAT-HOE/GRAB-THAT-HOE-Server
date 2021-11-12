import { Response } from "express";
import Post from "../../../../models/Post";
import TokenRequestType from "../../../../type/TokenRequestType";
import PostRequestType from "../../../../type/PostRequestType";

export default async (req: TokenRequestType, res: Response) => {
  const _id: string = req.user._id;
  const idx: string = req.params.idx;
  const data: PostRequestType = req.body;
  try {
    const post = await Post.findById(idx);
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: "해당 포스팅을 찾을 수 없습니다.",
      });
    }
    if (String(post.owner) !== _id) {
      return res.status(403).json({
        status: 403,
        message: "포스팅을 수정할 권한이 없습니다.",
      });
    }

    post.title = data.title || post.title;
    post.location = data.location || post.location;
    post.explanation = data.explanation || post.explanation;
    post.salary = data.salary || post.salary;
    post.additionalExplanation =
      data.additionalExplanation || post.additionalExplanation;
    post.isDisabled = data.isDisabled || post.isDisabled;
    post.isForeign = data.isForeign || post.isForeign;
    post.giveRoomAndBoard = data.giveRoomAndBoard || post.giveRoomAndBoard;
    post.giveSnack = data.giveSnack || post.giveSnack;
    post.startDate = data.startDate || post.startDate;
    post.endDate = data.endDate || post.endDate;
    post.startTime = data.startTime || post.startTime;
    post.endTime = data.endTime || post.endTime;
    post.breakTime = data.breakTime || post.breakTime;
    post.people = data.people || post.people;

    await post.save();
    return res.status(200).json({
      status: 200,
      message: "포스팅 수정에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 포스팅 수정에 실패했습니다.",
    });
  }
};
