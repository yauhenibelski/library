// eslint-disable-next-line import/no-mutable-exports
let users = new Map();

if (localStorage.getItem('library/users')) {
  const parseUsers = JSON.parse(localStorage.getItem('library/users'));
  users = new Map(Object.entries(parseUsers));
}

export default users;
