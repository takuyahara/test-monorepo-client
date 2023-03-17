const { Greeter } = require("./greeter/greeter/src/Greeter");
console.assert(
  Greeter.greet() === "Hello world.",
  "Cannot greet in default language."
);
console.assert(
  Greeter.greet("fr") === "Bonjour le monde.",
  "Cannot greet in French."
);
