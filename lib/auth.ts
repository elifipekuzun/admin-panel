import { hash, compare } from 'bcryptjs';

export const hashPassword = async (clientPassword: string) => {
  const hashedPassword = await hash(clientPassword, 12);
  return hashedPassword;
};

export const comparePasswords = async (
  clientPassword: string,
  hashedPassword: string
) => {
  const result = await compare(clientPassword, hashedPassword);
  return result;
};
