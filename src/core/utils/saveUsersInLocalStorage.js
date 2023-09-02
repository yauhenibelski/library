import users from '../users';

const saveUsersInLocalStorage = () => {
  localStorage.setItem(
    'library/users',
    JSON.stringify(Object.fromEntries(users.entries())),
  );
};

export default saveUsersInLocalStorage;
