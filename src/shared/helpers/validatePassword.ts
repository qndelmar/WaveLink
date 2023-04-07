export const validatePassword = (password: string): string => {
  if (!password) {
    return "The login field must not be empty";
  }
  if (password.length < 8) {
    return "Password's length must be more than 8 symbols";
  }
  return "";
};
