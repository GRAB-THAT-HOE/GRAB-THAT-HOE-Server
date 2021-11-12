import { Response } from "express";
import Post from "../../../../models/Post";
import TokenRequestType from "../../../../type/TokenRequestType";

export default async (req: TokenRequestType, res: Response) => {
  const _id: string = req.user._id;
  const idx: string = req.params.idx;
  try {
    const post = await Post.findById(idx);
    let isOwner: boolean = false;
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: "조회할 게시물을 찾지 못했습니다.",
      });
    }
    if (String(post.owner) === _id) {
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
