const getData = ({ name, address: { city: address } }) => {
  console.log(name);
  console.log(address);
};
const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
getData(person);
