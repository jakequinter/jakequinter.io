import firebase from './firebase';
import 'firebase/firestore';

import { Thing } from '@/types/thing';
import { Food } from '@/types/food';

const firestore = firebase.firestore();

export function createThing(data: Thing) {
  return firestore.collection('things').add(data);
}

export function createFood(data: Food) {
  return firestore.collection('food').add(data);
}
