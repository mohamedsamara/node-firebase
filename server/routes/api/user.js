import express from 'express';

import { db, admin } from '../../config/firebase';
import { isAuthenticated } from '../../middleware/authenticated';

const router = express.Router();

router.get('/', isAuthenticated, async (req, res) => {
  try {
    const doc = await db.collection('users').doc(res.locals.uid).get();
    const user = doc.data();

    res.json({
      user,
      success: true
    });
  } catch (error) {
    res.json({
      success: false
    });
  }
});

export default router;
