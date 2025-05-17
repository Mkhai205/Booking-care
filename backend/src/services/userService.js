import db from '../models/index.js';

const getAllUsers = async () => {
  try {
    const users = await db.User.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
    return {
      errCode: 0,
      message: 'OK',
      users
    };
  } catch (error) {
    console.error('Error getting users:', error);
    return {
      errCode: 1,
      message: 'Error from server'
    };
  }
};

const getUserById = async (userId) => {
  try {
    if (!userId) {
      return {
        errCode: 2,
        message: 'Missing required parameter'
      };
    }
    
    const user = await db.User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
    
    if (!user) {
      return {
        errCode: 3,
        message: 'User not found'
      };
    }
    
    return {
      errCode: 0,
      message: 'OK',
      user
    };
  } catch (error) {
    console.error('Error getting user by id:', error);
    return {
      errCode: 1,
      message: 'Error from server'
    };
  }
};

const createUser = async (userData) => {
  try {
    if (!userData.email || !userData.firstName || !userData.lastName || !userData.role) {
      return {
        errCode: 2,
        message: 'Missing required parameters'
      };
    }
    
    // Check if user with this email already exists
    const existingUser = await db.User.findOne({
      where: { email: userData.email }
    });
    
    if (existingUser) {
      return {
        errCode: 4,
        message: 'Email already exists'
      };
    }
    
    // Create new user
    await db.User.create({
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      address: userData.address || null,
      gender: userData.gender !== undefined ? userData.gender : null,
      phoneNumber: userData.phoneNumber || null,
      role: userData.role
    });
    
    return {
      errCode: 0,
      message: 'User created successfully'
    };
  } catch (error) {
    console.error('Error creating user:', error);
    return {
      errCode: 1,
      message: 'Error from server'
    };
  }
};

const updateUser = async (userData) => {
  try {
    if (!userData.id) {
      return {
        errCode: 2,
        message: 'Missing required parameter: id'
      };
    }
    
    const user = await db.User.findOne({
      where: { id: userData.id }
    });
    
    if (!user) {
      return {
        errCode: 3,
        message: 'User not found'
      };
    }
    
    // Update user data
    await user.update({
      firstName: userData.firstName !== undefined ? userData.firstName : user.firstName,
      lastName: userData.lastName !== undefined ? userData.lastName : user.lastName,
      address: userData.address !== undefined ? userData.address : user.address,
      gender: userData.gender !== undefined ? userData.gender : user.gender,
      phoneNumber: userData.phoneNumber !== undefined ? userData.phoneNumber : user.phoneNumber,
      role: userData.role !== undefined ? userData.role : user.role
    });
    
    return {
      errCode: 0,
      message: 'User updated successfully'
    };
  } catch (error) {
    console.error('Error updating user:', error);
    return {
      errCode: 1,
      message: 'Error from server'
    };
  }
};

const deleteUser = async (userId) => {
  try {
    if (!userId) {
      return {
        errCode: 2,
        message: 'Missing required parameter'
      };
    }
    
    const user = await db.User.findOne({
      where: { id: userId }
    });
    
    if (!user) {
      return {
        errCode: 3,
        message: 'User not found'
      };
    }
    
    await user.destroy();
    
    return {
      errCode: 0,
      message: 'User deleted successfully'
    };
  } catch (error) {
    console.error('Error deleting user:', error);
    return {
      errCode: 1,
      message: 'Error from server'
    };
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
