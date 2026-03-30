import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export async function getItems(userId) {
  const itemsCollection = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsCollection);

  let items = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

export async function addItem(userId, item) {
  const itemsCollection = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
}