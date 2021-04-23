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
    email: "ana@mail.com",
    username: "ana",
    password: "password",
    age: 23
  }),
  new User({
    email: "justinb@mail.com",
    username: "justb",
    password: "password",
    age: 26
  }),
  new User({
    email: "miamimami@mail.com",
    username: "miami100",
    password: "password",
    age: 24
  }),
  new User({
    email: "jona@mail.com",
    username: "jona2001",
    password: "password",
    age: 38
  }),
  new User({
    email: "richard@mail.com",
    username: "richard010",
    password: "password",
    age: 40
  }),
  new User({
    email: "pac@mail.com",
    username: "pacBro",
    password: "password",
    age: 31
  }),
  new User({
    email: "emma@mail.com",
    username: "emma10",
    password: "password",
    age: 57
  }),
  new User({
    email: "jennij@mail.com",
    username: "jennij10",
    password: "password",
    age: 21
  }),
];

module.exports = users;