import { db, admin } from '../config/firebase';

const deleteUser = async user => {
  try {
    await db.collection('users').doc(user.uid).delete();
  } catch (error) {
    console.log(error);
  }
};

const deleteFirestoreUsers = async () => {
  try {
    const usersList = await admin.auth().listUsers(1000);

    if (usersList.users.length > 0) {
      usersList.users.forEach(async user => {
        await admin.auth().deleteUser(user.uid);
      });
    } else {
      console.log('No users in firebase');
    }

    const users = [];
    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();
    snapshot.forEach(async doc => {
      users.push({ uid: doc.id });
    });

    const promises = users.map(async user => deleteUser(user));

    // eslint-disable-next-line compat/compat
    Promise.all(promises)
      .then(() => {
        console.log('Done!');
        process.exit();
      })
      .catch(e => console.log(e.message));
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

(async () => {
  await deleteFirestoreUsers();
})();
