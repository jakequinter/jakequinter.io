import { compareDesc, parseISO } from 'date-fns';

import { db } from './firebase-admin';

export async function getAllThings() {
  const snapshot = await db.collection('things').get();

  const things = [];

  snapshot.forEach(doc => {
    things.push({ id: doc.id, ...doc.data() });
  });

  things.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return things;
}

export async function getAllFood() {
  const snapshot = await db.collection('food').get();

  const food = [];

  snapshot.forEach(doc => {
    food.push({ id: doc.id, ...doc.data() });
  });

  food.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return food;
}
