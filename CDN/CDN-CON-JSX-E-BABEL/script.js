const rootEle = document.getElementById( "root" );
const root = ReactDOM.createRoot( rootEle );

const App = ( { children } ) => {
  return (
    <main className="main">
      <h2>MAIN</h2>
      { children }
    </main>
  );
};

function List() {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

root.render(
  <div>
    <App>
      <h1>Sto provando ad usare jsx con babel</h1>
      <List />

    </App>

  </div>
);
