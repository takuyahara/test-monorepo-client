const { Greeter } = require("./greeter/Greeter");
console.assert(
  Greeter.greet() === "Hello world.",
  "Cannot greet in default language."
);
console.assert(
  Greeter.greet("fr") === "Bonjour le monde.",
  "Cannot greet in French."
);
console.assert(
  Greeter.greet("ja") === "こんにちは世界。",
  "Cannot greet in Japanese."
);
