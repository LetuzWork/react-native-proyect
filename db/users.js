import { db } from "../db/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const getUser = async (id) => {
  try {
    const snap = await getDoc(doc(db, "users", id));
    console.log(snap.exists());
    return snap.exists() ? snap.data() : "no user";
  } catch (e) {
    console.log(e);
  }
};

const addUser = ({ id, name, surname, course, email, birth, number }) => {
  const docRef = setDoc(doc(db, "users", id), {
    name,
    surname,
    course,
    email,
    birth,
    number,
  })
    .then(() => alert(docRef))
    .catch(() => alert(e));
};

export { getUser, addUser };
