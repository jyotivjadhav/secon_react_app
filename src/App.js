
function App() {
  let str = `Hello Universe!!!`;
  let id = "id1";
  let user = { id: 1, name: "rohit" };

  return (
    <>
      <h1 id="id1">{ str}</h1>
      <h1>
        ID: {user.id} Name: {user.name}
      </h1>
      <h1 id={ id}>{ str}</h1>
    </>);
}

export default App;
