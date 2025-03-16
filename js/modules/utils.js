import { Data } from './data.js';
export const getRandomInt = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomTextFrom = (collection) =>
  (!Data?.[collection]?.length) ? '' : Data[collection][getRandomInt(0, Data[collection].length - 1)];
