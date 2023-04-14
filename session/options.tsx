import { IronSessionOptions } from "iron-session";

const options: IronSessionOptions = {
  cookieName: "ue-if",
  password: process.env.COOKIE_PASSWD!,
  ttl: 60 * 60 * 24 * 30
};

export default options