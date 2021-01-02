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

  return { things };
}

export async function getAllPersonalThings() {
  const snapshot = await db
    .collection('things')
    .where('type', '==', 'personal')
    .get();

  const things = [];

  snapshot.forEach(doc => {
    things.push({ id: doc.id, ...doc.data() });
  });

  things.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return { things };
}

export async function getAllPeopleThings() {
  const snapshot = await db
    .collection('things')
    .where('type', '==', 'people')
    .get();

  const things = [];

  snapshot.forEach(doc => {
    things.push({ id: doc.id, ...doc.data() });
  });

  things.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return { things };
}

export async function getAllPodcastThings() {
  const snapshot = await db
    .collection('things')
    .where('type', 'in', ['book', 'podcast'])
    .get();

  const things = [];

  snapshot.forEach(doc => {
    things.push({ id: doc.id, ...doc.data() });
  });

  things.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return { things };
}

export async function getAllYears() {
  const snapshot = await db.collection('years').get();

  const years = [];

  snapshot.forEach(doc => {
    years.push({ id: doc.id, ...doc.data() });
  });

  years.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return { years };
}

export async function getAllEntriesByYear(year) {
  const snapshot = await db.collection('years').where('year', '==', year).get();

  const years = [];

  snapshot.forEach(doc => {
    years.push({ id: doc.id, ...doc.data() });
  });

  years.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return { years };
}
