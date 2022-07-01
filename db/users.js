import { db } from "../db/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import AsyncStorage from "../utils/AsyncStorage";
const auth = getAuth();

const getUser = async (id) => {
  try {
    const snap = await getDoc(doc(db, "users", id));
    console.log(snap.exists());
    return snap.exists() ? snap.data() : "no user";
  } catch (e) {
    console.log(e);
  }
};

const authUser = async ({ email, password }) => {
  try {
    const docRef = collection(db, "users");
    const result = [];
    await signInWithEmailAndPassword(auth, email, password);

    const q = query(docRef, where("email", "==", email));
    const snap = await getDocs(q);
    snap.forEach((doc) => result.push(doc.data()));
    await AsyncStorage.storeData("user", result[0]);
    console.log(result[0]);
    return { msg: "logged" };
  } catch (e) {
    return { error: e };
  }
};

const addUser = async ({
  DNI,
  name,
  surname,
  course,
  email,
  phone,
  address,
  password,
}) => {
  try {
    const result = { msg: "success" };
    const user = await createUserWithEmailAndPassword(auth, email, password);
    user &&
      (await setDoc(doc(db, "users", DNI), {
        name,
        surname,
        course,
        email,
        phone,
        address,
      }));

    return [result, user];
  } catch (e) {
    return e;
  }
};

export { getUser, addUser, authUser };
