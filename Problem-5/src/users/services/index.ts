/** @format */

import User, { IUser } from "../schema";
import { CreateUserDTO, UpdateUserDTO } from "../DTO";

export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    return await User.find();
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error}`);
  }
};

export const getUserById = async (id: string): Promise<IUser> => {
  try {
    const user = await User.findById(id);
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error(`Failed to fetch user with id ${id}: ${error}`);
  }
};

export const createUser = async (newUser: CreateUserDTO): Promise<IUser> => {
  try {
    return await User.create(newUser);
  } catch (error) {
    throw new Error(`Failed to create user: ${error}`);
  }
};

export const updateUser = async (
  id: string,
  userData: UpdateUserDTO
): Promise<IUser> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, userData, {
      new: true,
    });
    if (updatedUser) {
      return updatedUser;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error(`Failed to update user with id ${id}: ${error}`);
  }
};

export const deleteUser = async (id: string): Promise<IUser> => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      return deletedUser;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error(`Failed to delete user with id ${id}: ${error}`);
  }
};
