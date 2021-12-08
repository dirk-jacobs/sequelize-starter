const UserLanguage = require('../models/UserLanguage');

const createUserLanguage1 = async () => {
  return await UserLanguage.findOrCreate({
    where: {
      UserID: 1,
      LanguageID: 2,
      Level: 1,
    },
  });
};

const createUserLanguage2 = async () => {
  return await UserLanguage.findOrCreate({
    where: {
      UserID: 1,
      LanguageID: 4,
      Level: 2,
    },
  });
};


const funcs = [
  createUserLanguage1,
  createUserLanguage2
];

funcs.map(fun => fun());


