const Language = require('../models/Language');

const createLanguages = async () => {
  return await Language.bulkCreate ([
    { LanguageID: 1, Language: 'Dutch'},
    { LanguageID: 2, Language: 'French'},
    { LanguageID: 3, Language: 'English'},
    { LanguageID: 4, Language: 'Spanish'}
  ]);
};

createLanguages();


