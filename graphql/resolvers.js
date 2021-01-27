const banban = {
    name: "Banban",
    age: 22
};
const resolvers = {
    Query: {
        person: () => banban
    }
};

export default resolvers;