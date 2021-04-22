const User = require('../models/User');

const users = [
  new User({
    email: "demo@mail.com",
    username: "demo",
    password: "password",
    age: 1000
  }),
  new User({
    email: "cris@mail.com",
    username: "cris",
    password: "password",
    age: 1000
  }),
  new User({
    email: "kevin@mail.com",
    username: "kevin1",
    password: "password",
    age: 1000
  }),
  new User({
    email: "chris@mail.com",
    username: "chris",
    password: "password",
    age: 1000
  }),
  new User({
    email: "khoa@mail.com",
    username: "khoa",
    password: "password",
    age: 1000
  })
];

module.exports = users;