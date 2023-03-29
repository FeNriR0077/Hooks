import { memo } from "react";

const NumberList = ({ numbers, handleAddNumbers }) => {
  console.log("child is rendered");
  let numArr = [];
  for (let i = 0; i <= numbers; i += 1) {
    numArr.push(i);
  }

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      {numArr.map((num, index) => {
        return <h4 key={index}>{num}</h4>;
      })}
      <button
        style={{ backgroundColor: "cyan", marginRight: "1rem" }}
        onClick={handleAddNumbers}
      >
        Add Numbers(In child)
      </button>
      <h4>Inside child</h4>
    </div>
  );
};

export default memo(NumberList);
