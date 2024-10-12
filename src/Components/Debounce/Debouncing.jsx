import { useEffect, useState } from "react";
import "../../../src/App.css";

function Debouncing() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(count);
  useEffect(() => {
    let Id = setTimeout(() => {
      setCount2(count);
    }, 500);
    return () => clearTimeout(Id);
  }, [count]);

  return (
    <>
      <h2>This is Debouncing</h2>
      <div className="card">
        <div className="buttons">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button>
            <div className="debounce">Debounced {count2}</div>
          </button>
        </div>
        <p>
          Edit <code>.src/Components/Debounce/Debouncing.jsx</code> and save to
          test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is a basic implementation of the debouncing
      </p>
    </>
  );
}

export default Debouncing;
