import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import options from "../../session/options";

export default withIronSessionApiRoute(async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log(`세션: ${req.session}`);
  res.send({
    login: req.session !== undefined && req.session.user !== undefined,
    loginLink: process.env.API_ENDPOINT,
  });
},
options);
