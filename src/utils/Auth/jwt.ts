import JWT from 'jsonwebtoken';

export const isTokenCorrect = (token: string) => {
  try {
    if (JWT.verify(token, 'abc123abc123'))
      return { isCorrect: true, data: 'ok!' };
  } catch (err) {
    return {
      isCorrect: false,
      data: err,
    };
  }
};
