"use strict";
// task 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedUsers = exports.users = exports.modifyUser = exports.resultAdd = exports.add = exports.resultTwoStrings = exports.concatTwoStrings = exports.result2 = exports.result1 = exports.concatName = void 0;
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
exports.concatName = concatName;
exports.result1 = (0, exports.concatName)("John", "Doe");
exports.result2 = (0, exports.concatName)("John");
// task 2
const concatTwoStrings = (a, b) => {
    return [a, b].join(" ");
};
exports.concatTwoStrings = concatTwoStrings;
exports.resultTwoStrings = (0, exports.concatTwoStrings)("Hello", "World");
// task 3
const add = (a, b) => {
    return a + b;
};
exports.add = add;
exports.resultAdd = (0, exports.add)(2, 3);
const modifyUser = (user, id, makeChange) => {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
exports.modifyUser = modifyUser;
exports.users = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];
exports.updatedUsers = (0, exports.modifyUser)(exports.users, "1", (user) => {
    return { ...user, name: "Waqas" };
});
//# sourceMappingURL=index.js.map