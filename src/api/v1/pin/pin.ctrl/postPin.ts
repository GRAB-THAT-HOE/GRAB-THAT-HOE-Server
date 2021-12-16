import { Response } from "express";
import TokenRequestType from "../../../../type/TokenRequestType";
import User from "../../../../models/User";
import Post from "../../../../models/Post";
import Pin from "../../../../models/Pin";

export default async (req, res: Response) => {
  const _id: string = req.user._id;
  const idx: string = req.params.idx;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "사용자를 찾을 수 없습니다.",
      });
    }
    if (user.permission === 0) {
      return res.status(403).json({
        status: 403,
        message: "말뚝 기능을 실행할 권한이 없습니다.",
      });
    }
    const post = await Post.findById(idx);
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: "말뚝 기능을 실행할 포스팅을 찾을 수 없습니다.",
      });
    }
    const pin = await Pin.create({
      owner: _id,
      post: post._id,
    });
    user.pins.push(pin._id);
    await user.save();
    post.pinNum += 1;
    await post.save();
    return res.status(200).json({
      status: 200,
      message: "말뚝 기능 실행에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 말뚝 기능을 실패했습니다.",
    });
  }
};
