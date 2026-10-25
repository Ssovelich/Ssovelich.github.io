// task 1

export const concatName = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

export const result1 = concatName("John", "Doe");
export const result2 = concatName("John");

// task 2

export const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(" ");
};

export const resultTwoStrings = concatTwoStrings("Hello", "World");

// task 3

export const add = (a: number, b: number) => {
  return a + b;
};

export const resultAdd = add(2, 3);

// task 4

type User = {
  id: string;
  name: string;
};

export const modifyUser = (
  user: User[],
  id: string,
  makeChange: (user: User) => User,
) => {
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};

export const users: User[] = [
  { id: "1", name: "John" },
  { id: "2", name: "Jane" },
];

export const updatedUsers = modifyUser(users, "1", (user) => {
  return { ...user, name: "Waqas" };
});
