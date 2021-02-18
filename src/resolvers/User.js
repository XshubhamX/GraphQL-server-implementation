const User = {
  repos(parent, args, { db }, info) {
    return db.repos.filter((x) => x.developer === parent.id);
  },
};

export { User as default };
