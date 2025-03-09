const Data = {
  PHOTO_DESCRIPTIONS: [
    'Момент, который стоит запомнить.',
    'Иногда слова не нужны.',
    'Тишина говорит громче слов.',
    'Счастье в мелочах.',
    'Этот кадр — вся история.',
    'Случайность, которая стала важной.',
    'Время остановилось.',
    'Просто быть здесь и сейчас.',
    'Мир в одном кадре.',
    'Эмоции, которые не передать словами.',
    'Этот момент — мой маленький секрет.',
  ],
  MESSAGES: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ],
  NAMES: [
    'Иван', 'Мария', 'Джон', 'Анна', 'Мухаммед', 'София', 'Карлос', 'Юка', 'Ольга',
    'Раджив', 'Эмма', 'Хуан', 'Лиза', 'Кейт', 'Алексей',
  ],
};

const getRandomInt = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomTextFrom = function(collection) {
  return (!Data?.[collection]?.length) ? '' : Data[collection][getRandomInt(0, Data[collection].length - 1)];
};

const getComments = function(count = 1) {
  return Array.from({length: count}, (_, i) => ({
    id: i + 1,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: Array.from({length: getRandomInt(1, 2)}, () =>
      getRandomTextFrom('MESSAGES')).join(' '),
    name: getRandomTextFrom('NAMES'),
  }));
};

const generatePhotos = function(count = 25) {
  return Array.from({length: count}, (_, i) => ({
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: getRandomTextFrom('PHOTO_DESCRIPTIONS'),
    likes: getRandomInt(15, 200),
    comments: getComments(getRandomInt(1, 30)),
  }));
};
