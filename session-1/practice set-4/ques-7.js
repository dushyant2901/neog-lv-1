const podAndTeamAllocation = (userData) => ({ ...userData, teamId: 667543 });

const userData = { firstName: "John", lastName: "Dee" };
console.log(podAndTeamAllocation(userData));
// {firstName: 'John', lastName: 'Dee', teamId: 667543}
