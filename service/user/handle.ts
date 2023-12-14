import { UserModelSchema } from "@/types/user";
import { ObjectId } from "mongoose";
import { UserModel } from "@/service/model";

export async function getUserById({ id }: { id: ObjectId }) {
  return await UserModel.findById(id);
}

export async function createUser({
  name,
  avatar_url,
  providerID,
}: {
  name: string;
  avatar_url: string;
  providerID: string;
}) {
  const user = {
    username: name,
    avatar: avatar_url,
    github: providerID,
  };

  return UserModel.create(user);
}

export async function updateUser({
  id,
  data,
}: {
  id: ObjectId;
  data: Partial<UserModelSchema>;
}) {
  // Use findByIdAndUpdate to find and update the user by ID
  const updatedUser = await UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!updatedUser) {
    // Handle the case where the user doesn't exist
    throw new Error("User not found");
  }

  // Optionally, you can return the updated user
  return updatedUser;
}

export async function removeUser({ id }: { id: ObjectId }) {
  // Use findByIdAndRemove to find and delete the user by ID
  const deletedUser = await UserModel.findByIdAndRemove(id);

  if (!deletedUser) {
    // Handle the case where the user doesn't exist
    throw new Error("User not found");
  }

  // Optionally, you can return the deleted user
  return deletedUser;
}
