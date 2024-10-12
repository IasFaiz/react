import { useEffect, useState } from "react";
import "../../App.css";

function AppPagination() {
  const [count, setCount] = useState(1);
  const [data, setdata] = useState([]);
  const ref = `https://jsonplaceholder.typicode.com/posts?_page=${count}&_limit=1`;
  useEffect(() => {
    fetch(ref)
      .then((response) => response.json())
      .then((responseData) => setdata(responseData))
      .catch((err) => console.error("Failed to", err));
  }, [ref]);
  const handleClickNext = () => {
    if (count < 50) setCount((prev) => prev + 1);
  };
  const handleClickBack = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  return (
    <>
      <h2>Api call with basic page changing functionality</h2>
      {data.map((data, idx) => (
        <div
          className="container"
          key={idx}
          style={{
            backgroundColor: "GrayText",
            margin: "10px",
            padding: "20px",
            borderRadius: "1%",
          }}
        >
          <div
            className="heading"
            style={{
              backgroundColor: "aqua",
              padding: "20px",
              borderRadius: "1%",
            }}
          >
            {data.title}
          </div>
          <div
            className="description"
            style={{
              backgroundColor: "GrayText",
              padding: "10px",
            }}
          >
            {data.body}
          </div>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          gap: "1rem",
        }}
      >
        <button onClick={handleClickBack} className="buttons">
          Back
        </button>
        <button onClick={handleClickNext} className="buttons">
          Next
        </button>
      </div>
    </>
  );
}

export default AppPagination;
