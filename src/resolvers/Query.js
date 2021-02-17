const Query = {
  users(parent, args, { db }, info) {
    if (!args.nameQuery) {
      return db.users;
    } else if (args.nameQuery) {
      return db.users.filter((x) => {
        let k = 0;
        for (let i = 0; i < x.name.length; i++) {
          for (let j = 0; j < args.nameQuery.length; j++) {
            if (x.name[i + j] !== args.nameQuery[j]) {
              k = 0;
              break;
            }
            k++;
            if (k === args.nameQuery.length) {
              return x;
            }
          }
        }
      });
    }
  },
  userById(parent, args, { db }, info) {
    const reqUser = db.users.find((x) => x.id === args.idQuery);
    return reqUser;
  },
  repos(parent, args, { db }, info) {
    if (!args.nameQuery) {
      return db.repos;
    } else if (args.nameQuery) {
      return db.repos.filter((x) => {
        let k = 0;
        for (let i = 0; i < x.title.length; i++) {
          for (let j = 0; j < args.nameQuery.length; j++) {
            if (x.title[i + j] !== args.nameQuery[j]) {
              k = 0;
              break;
            }
            k++;
            if (k === args.nameQuery.length) {
              return x;
            }
          }
        }
      });
    }
  },
};

export { Query as default };
