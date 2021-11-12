import { Request } from "express";
import UserTokenType from "./UserTokenType";

export default interface RequestType extends Request {
  user: UserTokenType;
}
