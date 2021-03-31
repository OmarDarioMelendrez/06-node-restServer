const express = require("express");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getAllUsers = (req, res, next) => {
  try {
    const users = [
      {
        id: 1,
        name: "Fernando",
      },
      {
        id: 2,
        name: "Marta",
      },
    ];
    res.json(users);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createUser = (req, res, next) => {
  try {
    const user = req.body;
    user.id = 86546;

    const result = {
      message: "User created",
      user,
    };
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const updateUser = (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
      message: "User updated",
      user,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const updatePartialUser = (req, res, next) => {
  try {
    const result = {
      message: "User updated with patch",
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const deleteUser = (req, res, next) => {
  try {
    const { id } = req.params;
    //const id = req.params.id;
    const result = {
      message: `User with id: ${id} deleted`,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  updatePartialUser,
  deleteUser,
};
