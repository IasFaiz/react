import { useEffect, useRef, useState } from "react";
import "../../App.css";

function DebounceAndThrottle() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(count);
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

  useEffect(() => {
    let Id = setTimeout(() => {
      setCount2(count);
    }, 500);
    return () => clearTimeout(Id);
  }, [count]);

  return (
    <>
      <h2>This is Debouncing with Throttling</h2>
      <div className="card">
        <div className="buttons">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button>
            <div className="debounce">Debounced {count2}</div>
          </button>
          <button>
            <div className="throttling">Throttled {count3}</div>
          </button>
        </div>
        <p>
          Edit <code>.src/Components/DebouncingThrottling.jsx</code> and save to
          test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is a basic implementation of the debouncing with throttling
      </p>
    </>
  );
}

export default DebounceAndThrottle;
