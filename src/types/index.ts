export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

type UserOmitClause = "id" | "createdAt" | "updatedAt";
export type CreateUser = Omit<User, UserOmitClause>;
