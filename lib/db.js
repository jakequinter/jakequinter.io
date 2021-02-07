import firebase from './firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export function createThing(data) {
  return firestore.collection('things').add(data);
}

export function createFood(data) {
  return firestore.collection('food').add(data);
}
