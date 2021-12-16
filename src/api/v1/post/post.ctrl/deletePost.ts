import { Response } from "express";
import TokenRequestType from "../../../../type/TokenRequestType";
import Post from "../../../../models/Post";

export default async (req, res: Response) => {
  const _id: string = req.user._id;
  const idx: string = req.params.idx;
  try {
    const post = await Post.findById(idx);
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: "삭제할 포스팅을 찾지 못했습니다.",
      });
    }
    if (String(post.owner) !== _id) {
      return res.status(403).json({
        status: 403,
        message: "포스팅을 삭제할 권한이 없습니다.",
      });
    }
    await Post.findByIdAndDelete(post._id);
    return res.status(200).json({
      status: 200,
      message: "포스팅 삭제에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 포스팅 삭제에 실패했습니다.",
    });
  }
};
