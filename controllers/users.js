import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;

  // const userWithId = { ...user, id: uuidv4() };

  users.push({ ...user, id: uuidv4() });

  res.send(`User with username ${user.firstName} added to the database!`);
};

export const getUserFromId = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const deleteUserById = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);

  res.send(`User with the id ${id} deleted from the database`);
};

export const patchUserById = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};
