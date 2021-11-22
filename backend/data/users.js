import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@techlious.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Subham Jaguri',
    email: 'subham.jaguri@techlious.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Subodh Jaguri',
    email: 'subodh.jaguri@techlious.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
