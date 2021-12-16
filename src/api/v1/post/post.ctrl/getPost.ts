import { Response } from "express";
import { getRepository } from "typeorm";
import Post from "../../../../entity/Post";

export default async (req, res: Response) => {
  const { phone } = req.user;
  const { idx } = req.params;
  try {
    const postRepository = getRepository(Post);
    const post: Post = await postRepository.findOne({
      where: {
        id: idx,
      },
    });
    let isOwner: boolean = false;
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: "조회할 게시물을 찾지 못했습니다.",
      });
    }
    if (post.user === phone) {
      isOwner = true;
    }
    return res.status(200).json({
      status: 200,
      message: "게시물 조회에 성공했습니다.",
      post,
      isOwner,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 포스팅 조회에 실패했습니다.",
    });
  }
};
