const Query = {
  users(parent, args, { db }, info) {
    if (!nameQuery) {
      return db.users;
    } else if (args.nameQuery) {
    }
  },
  userById(parent, args, { db }, info) {
    const reqUser = db.users.find((x) => x.id === args.idQuery);
    return reqUser;
  },
  repos(parent, args, { db }, info) {
    if (!args.query) {
      return db.repos;
    }
  },
};

export { Query as default };
