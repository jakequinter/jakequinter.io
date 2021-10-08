import { compareDesc, parseISO } from 'date-fns';

import { db } from './firebase-admin';
import { Thing } from '@/types/thing'
import { Food } from '@/types/food'

export async function getAllThings() {
  const snapshot = await db.collection('things').get();
  const things: Thing[] = [];

  snapshot.forEach(doc => {
    things.push({ id: doc.id, ...doc.data() as Thing });
  });

  things.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return things;
}

export async function getAllFood() {
  const snapshot = await db.collection('food').get();

  const food: Food[] = [];

  snapshot.forEach(doc => {
    food.push({ id: doc.id, ...doc.data() as Food });
  });

  food.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return food;
}
