const UserLanguage = require('../models/UserLanguage');

const createUserLanguages = async () => {
  return await UserLanguage.bulkCreate([
    {
      UserID: 1,
      LanguageID: 2,
      Level: 1,
    },
    {
      UserID: 1,
      LanguageID: 4,
      Level: 2,
    }
  ]);
};

createUserLanguages();

