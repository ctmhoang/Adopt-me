const App = () => {
  return React.createElement(
    "div", // tags name kind of component ?
    undefined, // atributes {}
    React.createElement("h1", {}, "Adopt Me!"), //children variable arity,
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havenese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
  );
};

const Pet = ({ name, animal, breed }) => {
  return React.createElement(
    "div",
    undefined,
    React.createElement("h1", undefined, name),
    React.createElement("h2", undefined, animal),
    React.createElement("h2", undefined, breed)
  );
};

ReactDOM.render(
  React.createElement(App), // Or use a composite component
  document.getElementById("root")
);
