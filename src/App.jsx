import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppPagination from "./Components/ApiWithBasicPagination/Pagination.jsx";
import DebounceAndThrottle from "./Components/DebouncingWithThrottling/DebouncingThrottling.jsx";
import Debouncing from "./Components/Debounce/Debouncing.jsx";
import Throttling from "./Components/Throttling/Throttling.jsx";

function App() {
  console.log("Hii");
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p className="read-the-docs">Collection of React components</p>
        <p className="read-the-docs">
          Click on Icons to know more about React/vite
        </p>
      </div>
      <div className="divider"></div>
      <div className="container">
        <AppPagination />
      </div>
      <div className="divider"></div>
      <div className="container">
        <Debouncing />
      </div>
      <div className="divider"></div>
      <div className="container">
        <Throttling />
      </div>
      <div className="divider"></div>
      <div className="container">
        <DebounceAndThrottle />
      </div>
      <div className="divider"></div>
    </>
  );
}

export default App;
