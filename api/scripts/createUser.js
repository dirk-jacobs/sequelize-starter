const User = require('../models/user.js');

const createUsers = async () => {
  return await User.bulkCreate( [
    {
      FirstName: 'Sonic',
      LastName: 'Bean',
      Email: 'sonic123@gmail.com',
      NationalityID: 1
    },
    {
      FirstName: 'James',
      LastName: 'Cameron',
      Email: 'james12@gmail.com',
      NationalityID: 1
    },
    {
      FirstName: 'Julie',
      LastName: 'Stevenson',
      Email: 'julie12@gmail.com',
      NationalityID: 3
    },
    {
      FirstName: 'Rita',
      LastName: 'Charles',
      Email: 'rita12@gmail.com',
      NationalityID: 2
    },
    {
      FirstName: 'Sam',
      LastName: 'Sterling',
      Email: 'sam12@gmail.com',
      NationalityID: 3
    }
  ]);
};

createUsers();