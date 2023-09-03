import users from '../users';

const getUserEmailOrCartNum = (val) => {
  if (users.has(val)) return users.get(val);

  const parseUsers = Object.values(Object.fromEntries(users));
  const [user] = parseUsers.filter((userObj) => userObj.email === val);

  if (user) return users.get(user.cardNumber);
};

export default getUserEmailOrCartNum;
