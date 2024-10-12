import { useEffect, useRef, useState } from "react";
import "../../../src/App.css";

function Throttling() {
  const [count, setCount] = useState(0);
  const [count3, setCount3] = useState(count);
  const [pending, setpending] = useState(false);
  const timerRef = useRef(0);
  const pendingRef = useRef(count);
  useEffect(() => {
    let now = Date.now();
    let id;
    let throttleTimer = now - timerRef.current;
    if (throttleTimer >= 2000) {
      setCount3(count);
      timerRef.current = now;
    } else {
      pendingRef.current !== count &&
        (id = setTimeout(() => {
          setpending((prev) => !prev);
        }, 2000 - throttleTimer));
    }
    pendingRef.current = count;
    return () => {
      clearTimeout(id);
    };
  }, [count, pending]);

  return (
    <>
      <div>
        <h2>This is throttling</h2>
      </div>
      <div className="card">
        <div className="buttons">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <button>
            <div className="throttling">Throttled {count3}</div>
          </button>
        </div>
        <p>
          Edit <code>.src/Components/Throttling/Throttling.jsx</code> and save
          to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is a basic implementation of the throttling
      </p>
    </>
  );
}

export default Throttling;
