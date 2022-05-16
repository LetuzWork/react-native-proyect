import { db } from "../db/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
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
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    return e;
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
