import { v4 as uuidv4 } from "uuid";
//get All Users
export const getUsers = (req, res) => {
  res.send(users);
};

//create new User
export const createUser = (req, res) => {
  const newUser = req.body;
  const userId = uuidv4();
  const userWithId = { ...newUser, id: userId };
  users.push(userWithId);
  res.send(userWithId);
};

//get Specific User
export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

//delete User
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

//update User
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const patchedUser = users.find((user) => user.id === id);
  if (firstName) {
    patchedUser.firstName = firstName;
  }
  if (lastName) {
    patchedUser.lastName = lastName;
  }
  if (age) {
    patchedUser.age = age;
  }
  res.send(users);
};
