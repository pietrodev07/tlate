import { CreateUser, User } from "./types";

export const createUser = (user: CreateUser): User => {
  return {
    id: Math.random(),
    ...user,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
