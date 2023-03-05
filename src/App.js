import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import TopMenu from "./components/topmenu/TopMenu";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <TopMenu />
      <Search />
    </div>
  );
}

export default App;
