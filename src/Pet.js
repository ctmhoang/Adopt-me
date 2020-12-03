import React from "react";

export default function Pet ({ name, animal, breed }) => {
  return React.createElement(
    "div",
    undefined,
    React.createElement("h1", undefined, name),
    React.createElement("h2", undefined, animal),
    React.createElement("h2", undefined, breed)
  );
};
