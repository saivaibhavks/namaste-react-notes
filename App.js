const heading = React.createElement("h1", {}, "Hello from React");

const child1 = React.createElement("h2", { id: "child1" }, "child 1");
const child2 = React.createElement("h2", {}, "child 2");
const parent = React.createElement("h1", {}, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
