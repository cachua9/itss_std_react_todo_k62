import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCrtZZM3Uz1Q5BA1m3A_VXWjew1sQh4xXU",
  authDomain: "fir-sample-8f101.firebaseapp.com",
  projectId: "fir-sample-8f101",
  storageBucket: "fir-sample-8f101.appspot.com",
  messagingSenderId: "849241307917",
  appId: "1:849241307917:web:11f9758b93910c04324e44"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}; 