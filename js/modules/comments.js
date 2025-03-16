import { getRandomInt, getRandomTextFrom } from './utils.js';

const createCommentItem = (index) => {
  const generateUniqueMessages = (count) => {
    const messages = new Set();

    while (messages.size < count) {
      const message = getRandomTextFrom('MESSAGES');
      messages.add(message);
    }

    return Array.from(messages).join(' ');
  };
  const sentenceCount = getRandomInt(1, 2);

  return {
    id: index + 1,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: generateUniqueMessages(sentenceCount),
    name: getRandomTextFrom('NAMES'),
  };
};

export const getComments = (count = 0) =>
  Array.from({length: count}, (_, index) => createCommentItem(index));
