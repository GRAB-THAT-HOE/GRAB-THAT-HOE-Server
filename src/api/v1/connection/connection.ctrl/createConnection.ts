import { Response } from "express";
import { getRepository } from "typeorm";
import Connection from "../../../../entity/Connection";
import Post from "../../../../entity/Post";
import User from "../../../../entity/User";

export default async (req, res: Response) => {
  const connection = new Connection();

  const { phone } = req.user;
  const idx = req.params;
  try {
    const postRepository = getRepository(Post);
    const post: Post = await postRepository.findOne({
      where: {
        id: idx,
      },
    });
    if (!post) {
      return res.status(404).json({
        status: 404,
        message: "게시물을 찾지 못했습니다.",
      });
    }

    const userRepository = getRepository(User);
    const user: User = await userRepository.findOne({
      where: {
        id: idx,
      },
    });
    if (user.permission === 0) {
      return res.status(403).json({
        status: 403,
        message: "게시물에 연결할 권한이 없습니다.",
      });
    }

    const connectionRepository = getRepository(Connection);
    const connection: Connection = await connectionRepository.findOne({
      where: [
        {
          post: idx,
        },
        {
          worker: phone,
        },
      ],
    });

    connection.farmer = post.user;
    connection.worker = phone;

    await connection.save();

    return res.status(200).json({
      status: 200,
      message: "밭일 연결에 성공했습니다.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류로 인해 연결에 실패했습니다.",
    });
  }
};
