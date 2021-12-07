const User = require('../models/user.js');

const createUser1 = async () => {
  return await User.findOrCreate({
    where: {
      FirstName: 'Sonic',
      LastName: 'Bean',
      Email: 'sonic123@gmail.com',
      NationalityID: 1
    }
  });
};

// user2
const createUser2 = async () => {
  return await User.findOrCreate({
    where: {
      FirstName: 'James',
      LastName: 'Cameron',
      Email: 'james12@gmail.com',
      NationalityID: 1
    }
  });
};

// user3
const createUser3 = async () => {
  return await User.findOrCreate({
    where: {
      FirstName: 'Julie',
      LastName: 'Stevenson',
      Email: 'julie12@gmail.com',
      NationalityID: 3
    }
  });
};

// user4
const createUser4 = async () => {
  return await User.findOrCreate({
    where: {
      FirstName: 'Rita',
      LastName: 'Charles',
      Email: 'rita12@gmail.com',
      NationalityID: 2
    }
  });
};

// user5
const createUser5 = async () => {
  return await User.findOrCreate({
    where: {
      FirstName: 'Sam',
      LastName: 'Sterling',
      Email: 'sam12@gmail.com',
      NationalityID: 3
    }
  });
};

const funcs = [
  createUser1,
  createUser2,
  createUser3,
  createUser4,
  createUser5
];

funcs.map(fun => fun());
