import { getRandomInt, getRandomTextFrom } from './utils.js';
import { getComments } from './comments.js';

const createPhotoItem = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomTextFrom('PHOTO_DESCRIPTIONS'),
  likes: getRandomInt(15, 200),
  comments: getComments(getRandomInt(0, 30)),
});

export const generatePhotos = (count = 25) =>
  Array.from({ length: count }, (_, index) => createPhotoItem(index));
