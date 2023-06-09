const User = require('../models/User');

export async function createUser(data) {
  try {
    const res = await User.create(data);
    return Promise.resolve(res);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function getAllUsers() {
  try {
    const res = await User.find();
    return Promise.resolve(res);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function getUser(id) {
  try {
    const res = await User.findById(id);
    return Promise.resolve(res);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function updateUser(data, id) {
  try {
    const res = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return Promise.resolve(res);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function deleteUser(id) {
  try {
    const res = await User.findByIdAndDelete(id);
    return Promise.resolve('user deleted');
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
