import { Response } from "express";
import { getRepository } from "typeorm";
import Connection from "../../../../entity/Connection";

export default async (req, res: Response) => {
  const { phone } = req.user;
  const { idx } = req.params;
  try {
    const connectionRepository = getRepository(Connection);
    const connection: Connection = await connectionRepository.findOne({
      where: [
        {
          workerPhone: phone,
        },
        {
          postId: idx,
        },
      ],
    });
    if (!connection) {
      return res.status(404).json({
        status: 404,
        message: "취소할 연결을 찾지 못했습니다.",
      });
    }
    await connectionRepository.remove(connection);
    return res.status(200).json({
      status: 200,
      message: "연결 취소에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 연결 취소에 실패했습니다.",
    });
  }
};
