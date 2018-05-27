function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "yu",
    lastName: "dekvos"
};
console.log(greeter(user));
