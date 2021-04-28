import type { NextApiRequest, NextApiResponse } from 'next';
import { isTokenCorrect } from '../../../utils/Auth/jwt';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization;
  console.log({ token });
  if (!token) {
    res.status(401).json({});
    return;
  }
  const validResult = isTokenCorrect(token);
  if (validResult?.isCorrect) {
    res.status(200).json({});
    return;
  } else {
    res.status(401).json(validResult);
  }
}
