import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/Weather";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Weather />
    </div>
  );
}

export default App;
