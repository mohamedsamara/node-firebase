import express from 'express';

import { db, admin } from '../../config/firebase';

const router = express.Router();

router.post('/session', async (req, res) => {
  try {
    const idToken = req.body.idToken.toString();
    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    const sessionCookie = await admin
      .auth()
      .createSessionCookie(idToken, { expiresIn });

    const options = { maxAge: expiresIn, httpOnly: true };
    res.cookie('session', `Bearer ${sessionCookie}`, options);
    res.end(JSON.stringify({ success: true }));
  } catch (error) {
    res.status(401).send('UNAUTHORIZED REQUEST!');
  }
});

router.post('/signout', async (req, res) => {
  try {
    const sessionCookie = req.cookies.session || '';
    const split = sessionCookie.split('Bearer ');
    const token = split[1];

    res.clearCookie('session');

    const decodedClaims = await admin.auth().verifySessionCookie(token);
    admin.auth().revokeRefreshTokens(decodedClaims.sub);

    res.json({
      success: true
    });
  } catch (error) {
    console.log({ error });

    res.json({
      success: false
    });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { userId, email, firstName, lastName } = req.body;

    const doc = db.collection('users').doc(userId);
    await doc.set(
      {
        userId,
        email,
        firstName,
        lastName
      },
      { merge: true }
    );

    res.json({
      success: true
    });
  } catch (error) {
    res.json({
      success: false
    });
  }
});

export default router;
