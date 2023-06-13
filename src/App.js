// PURE HTML :: DUMB
// JSX :: RETURN HTML :: THIS IS SMART
function App() {
  let str = `Hello Universe!!!`;

  let user = { id: 1, name: "rohit" };

  return (
    <>
      <h1>{ str}</h1>
      <h1>
        ID: {user.id} Name: {user.name}
      </h1>
    </>);
}

export default App;
