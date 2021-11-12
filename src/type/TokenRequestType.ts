import { Request } from "express";
import UserTokenType from "./UserTokenType";

export default interface TokenRequestType extends Request {
  user: UserTokenType;
}
