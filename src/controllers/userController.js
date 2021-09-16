import User from "../models/User";

export const postJoin = (req, res) => {
  const { name, birthYear, birthMonth, birthDay, phone, username, password } =
    req.body;
};
