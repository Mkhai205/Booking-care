import userService from '../services/userService.js';

const getAllUsers = async (req, res) => {
  try {
    const response = await userService.getAllUsers();
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error in getAllUsers controller:', error);
    return res.status(500).json({
      errCode: -1,
      message: 'Error from server'
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await userService.getUserById(userId);
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error in getUserById controller:', error);
    return res.status(500).json({
      errCode: -1,
      message: 'Error from server'
    });
  }
};

const createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error in createUser controller:', error);
    return res.status(500).json({
      errCode: -1,
      message: 'Error from server'
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userData = {
      ...req.body,
      id: req.params.id
    };
    const response = await userService.updateUser(userData);
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error in updateUser controller:', error);
    return res.status(500).json({
      errCode: -1,
      message: 'Error from server'
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await userService.deleteUser(userId);
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error in deleteUser controller:', error);
    return res.status(500).json({
      errCode: -1,
      message: 'Error from server'
    });
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
