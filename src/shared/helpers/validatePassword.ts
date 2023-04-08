export const validatePassword = (password: string): string => {
  if (!password) {
    return "The password field must not be empty";
  }
  if (password.length < 8) {
    return "Password's length must be more than 8 symbols";
  }
  if (password.length > 30) {
    return "Password's length must be less than 30 symbols";
  }
  return "";
};
