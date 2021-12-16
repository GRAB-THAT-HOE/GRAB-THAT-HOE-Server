import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Post from "../../../../entity/Post";

export default async (req: Request, res: Response) => {
  try {
    const postRepository = getRepository(Post);
    const posts: Post[] = await postRepository.find();
    return res.status(200).json({
      status: 200,
      message: "포스팅 조회에 성공했습니다.",
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 포스팅 조회에 실패했습니다.",
    });
  }
};
