export const validateLogin = (login: string): string => {
  if (!login) {
    return "The login field must not be empty";
  }
  if (!login.includes("@")) {
    return 'The login field must contain "@".';
  }
  if (login.length < 8) {
    return "Login must contain more than 5 characters";
  }
  return "";
};
