import model from "./model.js";
import mongoose from "mongoose";

export const createUser = (user) => {
  return model.create(user);
}

export const findAllUsers = () => model.find();

export const findUserById = async (userId) => {
  try {
    console.log("Searching for userId:", userId, "type:", typeof userId);
    
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.log("Invalid ObjectId format, trying direct string search");
      return model.findOne({ _id: userId }).lean();
    }
    
    const objectId = new mongoose.Types.ObjectId(userId);
    const user = await model.findOne({ _id: objectId }).lean();
    console.log("Query result:", user);
    
    return user;
  } catch (error) {
    console.error("Error in findUserById:", error);
    return model.findOne({ _id: userId }).lean();
  }
};

export const findUserByUsername = (username) => model.findOne({ username: username });
export const findUserByCredentials = (username, password) => model.findOne({ username, password });

export const updateUser = async (userId, user) => {
  try {
    if (mongoose.Types.ObjectId.isValid(userId)) {
      const objectId = new mongoose.Types.ObjectId(userId);
      return model.updateOne({ _id: objectId }, { $set: user });
    }
    return model.updateOne({ _id: userId }, { $set: user });
  } catch (error) {
    console.error("Error in updateUser:", error);
    return model.updateOne({ _id: userId }, { $set: user });
  }
};

export const deleteUser = async (userId) => {
  try {
    if (mongoose.Types.ObjectId.isValid(userId)) {
      const objectId = new mongoose.Types.ObjectId(userId);
      return model.deleteOne({ _id: objectId });
    }
    return model.deleteOne({ _id: userId });
  } catch (error) {
    console.error("Error in deleteUser:", error);
    return model.deleteOne({ _id: userId });
  }
};

export const findUsersByRole = (role) => model.find({ role: role });
export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i");
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};