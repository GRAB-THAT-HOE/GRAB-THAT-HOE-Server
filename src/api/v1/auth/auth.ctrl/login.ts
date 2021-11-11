import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 로그인에 실패했습니다.",
    });
  }
};
