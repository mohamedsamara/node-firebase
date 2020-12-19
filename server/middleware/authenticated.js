import { admin } from '../config/firebase';

export async function isAuthenticated(req, res, next) {
  const { session } = req.cookies;

  if (!session) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  if (!session.startsWith('Bearer')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  const split = session.split('Bearer ');
  if (split.length !== 2) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  const token = split[1];

  try {
    const decodedToken = await admin.auth().verifySessionCookie(token);

    res.locals = {
      ...res.locals,
      uid: decodedToken.uid,
      email: decodedToken.email
    };
    return next();
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
}
