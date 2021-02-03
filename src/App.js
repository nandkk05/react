const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-imp" }, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Shubham",
      animal: "Dog",
      breed: "Stray",
    }),
    React.createElement(Pet, {
      name: "Sanjay",
      animal: "Dog",
      breed: "Stray",
    }),
    React.createElement(Pet, {
      name: "Shivansh",
      animal: "Dog",
      breed: "Stray",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
