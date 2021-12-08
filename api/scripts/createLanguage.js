const Language = require('../models/Language');

const createLanguage1 = async () => {
  return await Language.findOrCreate({
    where: {
      LanguageID: 1,
      Language: 'Dutch',
    },
  });
};

const createLanguage2 = async () => {
  return await Language.findOrCreate({
    where: {
      LanguageID: 2,
      Language: 'French',
    },
  });
};

const createLanguage3 = async () => {
  return await Language.findOrCreate({
    where: {
      LanguageID: 3,
      Language: 'English',
    },
  });
};

const createLanguage4 = async () => {
  return await Language.findOrCreate({
    where: {
      LanguageID: 4,
      Language: 'Spanish',
    },
  });
};


const funcs = [
  createLanguage1,
  createLanguage2,
  createLanguage3,
  createLanguage4
];

funcs.map(fun => fun());


