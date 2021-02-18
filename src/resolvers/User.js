const User = {
  repos(parent, args, { db }, info) {
    if (args.visibility === "ALL") {
      return db.repos.filter((x) => x.developer === parent.id);
    }
    return db.repos.filter(
      (x) =>
        x.developer === parent.id &&
        x.visibility === args.visibility.toLowerCase()
    );
  },
};

export { User as default };
