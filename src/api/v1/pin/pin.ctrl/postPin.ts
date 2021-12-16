import { Response } from "express";
import User from "../../../../entity/User";
import Post from "../../../../entity/Post";
import Pin from "../../../../entity/Pin";
import { getRepository } from "typeorm";

export default async (req, res: Response) => {
  const { phone } = req.user;
  const { idx } = req.params;
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
        message: "말뚝 기능을 실행할 권한이 없습니다.",
      });
    }
    const postRepository = getRepository(Post);
    const post: Post = await postRepository.findOne({
      where: {
        id: idx,
      },
    });
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: "말뚝 기능을 실행할 포스팅을 찾을 수 없습니다.",
      });
    }
    const pin: Pin = new Pin();
    pin.user = user;
    pin.post = post;
    await pin.save();
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
