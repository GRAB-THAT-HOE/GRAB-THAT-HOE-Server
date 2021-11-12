import { Request, Response } from "express";
import Post from "../../../../models/Post";

export default async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({}).sort({ salary: -1 }); // 추후 위치 기반 서비스 도입 시 위치로 우선 정렬
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
