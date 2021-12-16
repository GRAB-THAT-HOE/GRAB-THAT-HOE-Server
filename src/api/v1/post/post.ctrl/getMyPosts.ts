import { Response } from "express";
import { getRepository } from "typeorm";
import Post from "../../../../entity/Post";
import User from "../../../../entity/User";

export default async (req, res: Response) => {
  const { phone } = req.user;
  try {
    const postRepository = getRepository(Post);
    const posts: Post[] = await postRepository.find({
      where: {
        userPhone: phone,
      },
    });
    return res.status(200).json({
      status: 200,
      message: "자신의 포스팅 조회에 성공했습니다.",
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 자신의 포스팅 조회에 실패했습니다.",
    });
  }
};
