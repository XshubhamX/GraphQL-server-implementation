const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }
  },
  repos(parent, args, { db }, info) {
    if (!args.query) {
      return db.repos;
    }
  },
};

export { Query as default };
