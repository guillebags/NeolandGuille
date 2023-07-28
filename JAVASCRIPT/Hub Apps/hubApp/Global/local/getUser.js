export const getUserName = () => {
  const user = localStorage.getItem(name);
  const parsedUser = JSON.parse(user);
  return parsedUser;
};
