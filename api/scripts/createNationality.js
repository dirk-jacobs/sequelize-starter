const Nationality = require('../models/Nationality');

const createNationalities = async () => {
  return await Nationality.bulkCreate([
    { NationalityID: 1, Country: 'Belgium' },
    { NationalityID: 2, Country: 'Indonesia'},
    { NationalityID: 3, Country: 'Peru'},
  ]);
};

createNationalities();