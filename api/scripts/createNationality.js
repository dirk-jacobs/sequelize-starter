const Nationality = require('../models/Nationality');

const createNationality1 = async () => {
  return await Nationality.findOrCreate({
    where: {
      NationalityID: 1,
      Country: 'Belgium',
    },
  });
};

const createNationality2 = async () => {
  return await Nationality.findOrCreate({
    where: {
      NationalityID: 2,
      Country: 'Indonesia',
    },
  });
};

const createNationality3 = async () => {
  return await Nationality.findOrCreate({
    where: {
      NationalityID: 3,
      Country: 'Peru',
    },
  });
};

const funcs = [
  createNationality1,
  createNationality2,
  createNationality3
];

funcs.map(fun => fun());


